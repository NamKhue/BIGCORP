var express = require('express');
var router = express.Router();
let studentController = require("../controllers/student.controller");

router.get("/students", studentController.getAllStudents);
router.get("/student/:id", studentController.getStudentById);
router.post("/student", studentController.createStudent);
router.delete("/student/:id", studentController.deleteStudent);
router.put("/student/:id", studentController.updateStudent);

module.exports = router;