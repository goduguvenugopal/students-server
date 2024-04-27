const Student = require("../model/Student");
const dotEnv = require("dotenv");
const jwt = require("jsonwebtoken");

dotEnv.config();

//students post method

const createStudent = async (req, res) => {
  try {
    const { name, Class, studentId, address, paid, totalAmount } = req.body;
    if (!name || !Class || !studentId || !address || !paid || !totalAmount) {
      res.status(400).json({ message: "student details required" });
    }

    const exists = await Student.findOne({ studentId });
    if (exists) {
      res.status(400).json({ message: "student already existed " });
    }

    const user = new Student({
      name,
      Class,
      studentId,
      address,
      paid,
      totalAmount,
    });
    await user.save();
    res
      .status(200)
      .json({ message: "student details saved successfully", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured at server side" });
  }
};

// students details get method controller logic code

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    if (!students) {
      res.status(404).json({ message: "students not found" });
    }
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured at server side" });
  }
};

//students delete method controller logic code

const deleteStudent = async (req, res) => {
  try {
    const students = await Student.findByIdAndDelete(req.params.id);
    if (!students) {
      res.status(404).json({ message: "student not found" });
    }
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured at server side" });
  }
};

// findbyone method controller logic code

const findOneStudent = async (req, res) => {
  try {
    const { studentId } = req.body;
    if (!studentId) {
      return res.status(400).json({ message: "Student ID is required" });
    }
    const students = await Student.findOne({ studentId });
    if (!students) {
      res.status(404).json({ message: "student not found" });
    }
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured at server side" });
  }
};

//findOneAndUpdate method controller logic code

const findUpdateStudent = async (req, res) => {
  try {
    const { studentId, pay } = req.body;
    const updateStudent = await Student.findOneAndUpdate(
      { studentId: studentId },
      { $set: { paid: pay } },
      { new: true }
    );

    if (!updateStudent) {
      return res.status(404).json({ message: "student not found" });
    }
    res.status(200).json(updateStudent);
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// findbyid method controller logic code

const findByIdUpdateStudent = async (req, res) => {
  try {
    const dataAll = req.body;

    const updateAll = await Student.findByIdAndUpdate(req.params.id, dataAll, {
      new: true,
    });
    if (!updateAll) {
      return res.status(404).json({ message: "student not found" });
    }
    res.status(200).json(updateAll);
  } catch (error) {
    console.error("Error updating students:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createStudent,
  getStudents,
  deleteStudent,
  findOneStudent,
  findUpdateStudent,
  findByIdUpdateStudent,
};
