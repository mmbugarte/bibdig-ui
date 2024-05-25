const AWS = require("aws-sdk");

// Configurar AWS SDK
AWS.config.update({ region: process.env.AWS_REGION });
const secretsManager = new AWS.SecretsManager({ region: "us-west-2" });

secretsManager
  .getSecretValue({ SecretId: "mmbu/strapi/api-key" })
  .promise()
  .then((data) => {
    const secret = data.SecretString;
    console.log({
      secret,
      key: JSON.parse(secret)["mmbu-strapi-dev"],
    });
    module.exports.STRAPI_API_TOKEN = JSON.parse(secret)["mmbu-strapi-dev"];
    console.log(module.exports);
  })
  .catch((err) => {
    console.error(err);
  });
