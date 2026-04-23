require("dotenv").config();

const app = require("../src/app");
const connectToDB = require("../src/config/database");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

module.exports = async (req, res) => {
  await connectToDB();

  // ✅ Fix for binary response corruption on Vercel
  if (req.url.includes("/resume/pdf/")) {
    res.setHeader("Content-Type", "application/pdf");
  }

  return app(req, res);
};
