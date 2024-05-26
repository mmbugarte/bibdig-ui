(function getSecrets() {
  console.log(`Running in ${process.env.NODE_ENV} mode`);
  switch (process.env.NODE_ENV) {
    case "dev":
      getSecretsFromEnv();
      break;
    case "test":
    case "prod":
      getSecretsFromAWS();
  }
})();

function getSecretsFromEnv() {
  module.exports.STRAPI_API_TOKEN = process.env.VUE_APP_STRAPI_API_TOKEN;
}

function getSecretsFromAWS() {
  const AWS = require("aws-sdk");
  AWS.config.update({ region: process.env.AWS_REGION });

  const secretsManager = new AWS.SecretsManager({ region: "us-west-2" });

  secretsManager
    .getSecretValue({ SecretId: "mmbu/strapi/api-key" })
    .promise()
    .then((data) => {
      const secret = JSON.parse(data.SecretString);
      console.log({ secret });

      module.exports.STRAPI_API_TOKEN = secret["mmbu-strapi-dev"];
    })
    .catch((err) => {
      console.error(err);
    });
}
