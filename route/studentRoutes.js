const express = require("express");
const router = express.Router();
const createStudents = require("../controller/studentController")

// router for post , get , put ,delete , 
router.post("/enroll",createStudents)

module.exports = router