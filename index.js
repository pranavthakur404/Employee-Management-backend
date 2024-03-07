const express = require("express");
const app = express();
require("dotenv").config();
const employeeRoutes = require("./routes/routes");
const dbConnect = require("./config/database");
const PORT = process.env.PORT || 3000;
var cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

// parsing
app.use(express.json());

// mounting routes
app.use("/api/v1/", employeeRoutes);

//dn connection
dbConnect();

// default routes
app.get("/", (req, res) => {
  res.send("Welcome to Employment management system");
});

// listening app
app.listen(PORT, () => {
  console.log("Server started at port ", PORT);
});
