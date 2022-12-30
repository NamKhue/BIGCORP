var express = require('express');
var router = express.Router();
let fa_controller = require("../controllers/factory.controller");

// giao dien chinh
router.get("/factory", fa_controller.home);
router.get("/factory/import_goods", fa_controller.uiImportGoods);

// nhap hang moi vao kho
router.post("/factory/import_goods", fa_controller.importGoods);
router.post("/factory/export_goods", fa_controller.exportGoods);

// thong ke

module.exports = router;