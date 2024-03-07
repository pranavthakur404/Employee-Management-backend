const Employee = require("../models/employeeModels");

const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Employee.findByIdAndDelete({ _id: id });
    res.status(200).json({
      success: true,
      data: response,
      message: "Data deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = deleteEmployee;
