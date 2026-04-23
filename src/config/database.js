const mongoose = require("mongoose");

let isConnected = false;

async function connectToDB() {
  if (isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGO_URI, {
      dbName: "interview-master",
    });

    isConnected = db.connections[0].readyState;

    console.log("✅ Connected to Database");
  } catch (err) {
    console.error("❌ DB Error:", err);
    throw err;
  }
}

module.exports = connectToDB;
