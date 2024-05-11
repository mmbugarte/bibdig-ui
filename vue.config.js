const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    proxy: {
      "/api": {
        target: "http://cms:1337", // La URL de tu servidor Strapi
        changeOrigin: true,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onProxyReq: (proxyReq, req, res) => {
          console.log(`API request proxied: ${req.method} ${req.path}`);
          proxyReq.setHeader(
            "Authorization",
            "Bearer a5b8da0497aacfb9a56baff3a54e8deaaa33a96739f7ae4e365f6ffe31bf4d01239ffc7e28aa0351e380738421c8904272aca00f7ee2e28e2b36c7edb944b71cc45e343cb1a4e2f30f5b0c588bc189f418848891af331c84bab7725dfd175d756ddb6e180e655478f38e3dd881b593d85970d0b9649c9724a99b168e9fa29caa"
          );
        },
      },
    },
  },
});
