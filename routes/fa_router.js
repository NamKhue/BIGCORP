var express = require('express');
var fa_router = express.Router();
let fa_controller = require("../controllers/factory.controller");

// nhap hang moi vao kho
fa_router.post("/import_goods", fa_controller.importGoods);
fa_router.post("/export_goods", fa_controller.exportGoods);

// thong ke

module.exports = fa_router;