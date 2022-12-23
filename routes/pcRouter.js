var express = require('express');
const parentcompanyController = require('../controllers/parentcompany.controller');
var pc_router = express.Router();
let pc_controller = require("../controllers/parentcompany.controller");



// router.get("/category/:id", parentcompanyController.getAllProductsAccordingToCategory);




// router.get("/student/:id", studentController.getStudentById);
// router.post("/student", studentController.createStudent);
// router.delete("/student/:id", studentController.deleteStudent);
// router.put("/student/:id", studentController.updateStudent);

module.exports = pc_router;