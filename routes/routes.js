const express = require("express");
const router = express.Router();

// controller
const createEmployee = require("../controller/createEmployee");
const getEmployee = require("../controller/getAllEmployee");
const deleteEmployee = require("../controller/deleteEmployee");

// defining path
router.post("/createEmployee", createEmployee);
router.get("/getAll", getEmployee);
router.delete("/delete/:id", deleteEmployee);



// exporting router
module.exports = router;
