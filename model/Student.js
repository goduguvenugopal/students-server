const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  Class: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
  paid: {
    type: Number,
    required: true,
  },
  totalAmount: {
    type: String,
    required: true,
  },
  joiningDate : {
    type : String,
    required : true
  },
  lastPaymentDate : {
    type : String
    
  }

});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
