require("dotenv").config();

const sha1 = require("node-sha1");
const FormData = require("form-data");
const path = require("path");
const fs = require("fs");

const utils = require("./src/services/utils");
const api = require("./src/services/api");
const urls = require("./src/constants/api_urls");
const cipher = require("./src/services/cipher");

const apiToken = process.env.TOKEN;

const options = {
  params: {
    token: apiToken,
  },
};

function main() {
  api
    .get(urls.path_urls.challenge, options)
    .then(apiResponse => {
      const { data } = apiResponse;

      data.decifrado = cipher.crypt(data.cifrado, -data.numero_casas);
      data.resumo_criptografico = sha1(data.decifrado);

      utils.saveJSON(data, err => {
        if (err) console.error(err);
      });

      const form = new FormData();
      const file = path.resolve("answer.json");

      form.append("answer", fs.createReadStream(file));

      api
        .post(urls.path_urls.solution, form, {
          headers: form.getHeaders(),
          params: {
            token: apiToken,
          },
        })
        .then(response => {
          const { data: postData } = response;

          console.log(postData);
        });
    })
    .catch(console.error);
}

main();
