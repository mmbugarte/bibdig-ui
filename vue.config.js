const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    proxy: {
      "/api": {
        target: process.env.VUE_APP_STRAPI_URL,
        changeOrigin: true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onProxyReq: (proxyReq, req, res) => {
          console.log(`API request proxied: ${req.method} ${req.path}`);
          proxyReq.setHeader(
            "Authorization",
            `Bearer ${process.env.VUE_APP_STRAPI_API_TOKEN}`
          );
        },
      },
      "/uploads": {
        target: process.env.VUE_APP_STRAPI_URL,
        changeOrigin: true,
      },
    },
  },
});
