const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    proxy: {
      "/api": {
        target: "http://cms:1337/api", // La URL de tu servidor Strapi
        changeOrigin: true,
        pathRewrite: {
          "^/api": "", // Elimina la ruta /api del inicio de la URL
        },
        on: {
          proxyReq: (proxyReq, req, res) => {
            // Registrar el pedido (request) a la consola
            console.log(`Solicitud a la API: ${req.method} ${req.path}`);
          },
          error: (err, req, res) => {
            console.error("Error en proxy:", err);
            res.writeHead(500, {
              "Content-Type": "text/plain",
            });
            res.end("Proxy error.");
          },
        },
      },
    },
  },
});
