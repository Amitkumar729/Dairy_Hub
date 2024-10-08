const mongoose = require("mongoose");

const ConnectToDb = async () => {
  await mongoose
    .connect(
      "mongodb://localhost:27017/"
    )
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error("Error connecting to MongoDB:", err);
    });
};

module.exports = { ConnectToDb };
