var express = require('express');
var fa_router = express.Router();
let fa_controller = require("../controllers/factory.controller");

// nhap hang moi vao kho
fa_router.get("/import_goods", fa_controller.importGoods);

// fa_router.get("/location/:id", fa_controller.getAllLocations);

// cap account
// fa_router.post("/student", fa_controller.createStudent);

// thong ke
// fa_router.delete("/student/:id", fa_controller.deleteStudent);
// fa_router.put("/student/:id", fa_controller.updateStudent);

module.exports = fa_router;