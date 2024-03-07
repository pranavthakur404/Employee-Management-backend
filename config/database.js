const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://pranavufc:SoRbyqbAVebbqOYX@cluster0.jtcfr0w.mongodb.net/Employ_management"
    )
    .then(() => console.log("Database connect successfully"))
    .catch((err) => {
      console.log(err);
      console.log("Something went wront in database connection");
    });
};

module.exports = dbConnect;
