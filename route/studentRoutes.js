const express = require("express");
const router = express.Router();
const studentsController = require("../controller/studentController");

// router for post , get , put ,delete ,
router.post("/enroll", studentsController.createStudent);
router.get("/get-students", studentsController.getStudents);
router.delete("/del-students/:id",studentsController.deleteStudent)
router.post("/find-student",studentsController.findOneStudent)
router.put("/update-one",studentsController.findUpdateStudent)

module.exports = router;
