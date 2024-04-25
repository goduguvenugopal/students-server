const express = require("express");
const router = express.Router();
const studentsController = require("../controller/studentController");

// router for post , get , put ,delete ,
router.post("/enroll", studentsController.createStudents);
router.get("/get-students", studentsController.getStudents);

module.exports = router;
