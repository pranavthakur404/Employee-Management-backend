const mongoose = require("mongoose");
require("dotenv").config();

// const dbConnect = async () => {
//   await mongoose
//     .connect(
//       "mongodb+srv://pranavufc:SoRbyqbAVebbqOYX@cluster0.jtcfr0w.mongodb.net/Employ_management"
//     )
//     .then(() => console.log("Database connect successfully"))
//     .catch((err) => {
//       console.log(err);
//       console.log("Something went wront in database connection");
//     });
// };

const dbConnect = async () => {
  let timeout = 25;
  while (mongoose.connection.readyState === 0) {
    if (timeout === 0) {
      console.log("timeout");
      throw new Error("timeout occured with mongoose connection");
    }
    await mongoose.connect(
      "mongodb+srv://pranavufc:SoRbyqbAVebbqOYX@cluster0.jtcfr0w.mongodb.net/Employ_management"
    );
    timeout--;
  }
  console.log("Database connection status:", mongoose.connection.readyState);
};
module.exports = dbConnect;
