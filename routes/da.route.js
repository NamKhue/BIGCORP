var express = require('express');
var router = express.Router();
let da_controller = require("../controllers/distribution_agent.controller");

// ui chinh
router.get("/distribution_agent", da_controller.home);
router.get("/distribution_agent/sell_product", da_controller.uiSellProduct);

// tao giao dich ban san pham
router.post("/distribution_agent/sell_product", da_controller.sellProduct);

// tao phieu bao hanh
router.post("/distribution_agent/move_to_warranty_center", da_controller.moveWarrantyGoods);

// thong ke

module.exports = router;