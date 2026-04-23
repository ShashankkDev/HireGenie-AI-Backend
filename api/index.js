require("dotenv").config();

const app = require("../src/app");
const connectToDB = require("../src/config/database");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

module.exports = async (req, res) => {
  await connectToDB(); // 🔥 THIS LINE FIXES EVERYTHING
  return app(req, res);
};

// ✅ serverless export
module.exports = app;
