const axios = require("axios");
const apiUrls = require("../../constants/api_urls");

const baseApi = axios.create({
  baseURL: apiUrls.BASE_HOST,
});

module.exports = baseApi;
