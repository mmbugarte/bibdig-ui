const { defineConfig } = require("@vue/cli-service");
const secrets = require("./src/util/secrets");

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
            `Bearer ${secrets.STRAPI_API_TOKEN}`
          );
        },
      },
      "/uploads": {
        target: process.env.VUE_APP_STRAPI_URL,
        changeOrigin: true,
      },
      "/admin": {
        target: process.env.VUE_APP_STRAPI_URL,
        changeOrigin: true,
      },
    },
  },
});
