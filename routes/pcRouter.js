var express = require('express');
var pc_router = express.Router();
let pc_controller = require("../controllers/parentcompany.controller");

// quan ly danh muc
pc_router.get("/category/:id", pc_controller.getAllProductsAccordingToCategory);
pc_router.get("/location/:id", pc_controller.getAllLocations);

// cap account
// pc_router.post("/student", pc_controller.createStudent);

// thong ke
// pc_router.delete("/student/:id", pc_controller.deleteStudent);
// pc_router.put("/student/:id", pc_controller.updateStudent);

module.exports = pc_router;