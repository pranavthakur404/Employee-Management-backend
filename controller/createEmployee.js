const Employee = require("../models/employeeModels");

const createEmployee = async (req, res) => {
  try {
    const { name, phoneNumber, email, role, department } = req.body;
    if (!(name || phoneNumber || email || role || department)) {
      return res.status(400).json({
        success: false,
        message: "All field Required",
      });
    }

    // storing data in database
    const response = await Employee.create({
      name,
      phoneNumber,
      email,
      role,
      department,
    });

    res.status(200).json({
      success: true,
      data: response,
      message: "Data save successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something went wrong in while createing Employee",
    });
  }
};

module.exports = createEmployee;
