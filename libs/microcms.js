'use strict';

require('dotenv').config();

const createClient = require("microcms-js-sdk").createClient;
const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

class MicroCms {

  constructor() {};

  /*if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
  }

  if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
  }*/

  async getList(endpoint, queries) {
    const listData = await client.get({
      endpoint: endpoint,
      queries,
    });
    return listData;
  };
}

module.exports = MicroCms;