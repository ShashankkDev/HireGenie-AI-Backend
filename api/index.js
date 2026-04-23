require("dotenv").config();

const app = require("../src/app");
const connectToDB = require("../src/config/database");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

// ⚠️ Important: DB connect
connectToDB();

// ✅ serverless export
module.exports = app;
