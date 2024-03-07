const Employee = require("../models/employeeModels");

const getAllEmployee = async (req, res) => {
  try {
    const response = await Employee.find({});
    res.status(200).json({
      success: true,
      data: response,
      message: "Successfully get all Data",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching data",
    });
  }
};

module.exports = getAllEmployee;
