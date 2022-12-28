var express = require('express');
var wc_router = express.Router();
let wc_controller = require("../controllers/warranty_center.controller");

// tao phieu chuyen spham toi factory
wc_router.post("/move_to_factory", wc_controller.moveGoodsToFactory);

// thong ke

module.exports = wc_router;