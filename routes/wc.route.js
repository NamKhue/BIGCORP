var express = require('express');
var router = express.Router();
let wc_controller = require("../controllers/warranty_center.controller");

// main ui
router.get("/warranty_center", wc_controller.home);
router.get("/warranty_center/move_to_factory", wc_controller.uiMoveGoodsToFactory);

// tao phieu chuyen spham toi factory
router.post("/warranty_center/move_to_factory", wc_controller.moveGoodsToFactory);

// thong ke

module.exports = router;