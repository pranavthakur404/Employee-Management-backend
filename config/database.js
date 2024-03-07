const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Database connect successfully"))
    .catch((err) => {
      console.log(err);
      console.log("Something went wront in database connection");
    });
};

module.exports = dbConnect;
