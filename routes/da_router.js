var express = require('express');
var da_router = express.Router();
let da_controller = require("../controllers/distribution_agent.controller");

// tao giao dich ban san pham
da_router.post("/sell_product", da_controller.sellProduct);

// tao phieu bao hanh
da_router.post("/move_to_warranty_center", da_controller.moveWarrantyGoods);

// thong ke

module.exports = da_router;