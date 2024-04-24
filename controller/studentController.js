const Student = require("../model/Student");

//students post method

const createStudents = async (req, res) => {
  try {
    const { name, studentId, address, paid, totalAmount } = req.body;
    if (!name || !studentId || !address || !paid || !totalAmount) {
      res.status(400).json({ message: "student details required" });
    }

    const exists = await Student.findOne({ studentId });
    if (exists) {
      res.status(400).json({ message: "student already existed " });
    }

    const user = new Student({ name, studentId, address, paid, totalAmount });
    await user.save();
    res
      .status(200)
      .json({ message: "student details saved successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured at server side" });
  }
};

module.exports = createStudents;