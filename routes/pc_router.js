var express = require('express');
var pc_router = express.Router();
let pc_controller = require("../controllers/parentcompany.controller");

// quan ly danh muc
pc_router.get("/category/:id", pc_controller.getAllProductsAccordingToCategory);
pc_router.get("/location/:id", pc_controller.getAllLocations);
pc_router.get("/customers", pc_controller.getAllCustomers);
pc_router.get("/product_of_customer/:id", pc_controller.getProductsByCustomer);
pc_router.get("/sold_products", pc_controller.getAllSoldProducts);

// cap account
pc_router.post("/provide_account", pc_controller.provideAccount);

// thong ke
// pc_router.delete("/student/:id", pc_controller.deleteStudent);
// pc_router.put("/student/:id", pc_controller.updateStudent);

module.exports = pc_router;