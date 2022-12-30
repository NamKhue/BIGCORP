var express = require('express');
var router = express.Router();
let pc_controller = require("../controllers/parentcompany.controller");

// main ui
router.get("/parentcompany", pc_controller.home);

// quan ly danh muc
router.get("/parentcompany", pc_controller.home);
router.get("/parentcompany/register", pc_controller.uiRegister);
router.get("/parentcompany/manage_category_product", pc_controller.uiManageCategoryProduct);
router.get("/parentcompany/category/:id", pc_controller.getAllProductsAccordingToCategory);
router.get("/parentcompany/manage_facility", pc_controller.uiManageFacility);
router.get("/parentcompany/manage_facility/:id", pc_controller.getAllLocations);
router.get("/parentcompany/customers", pc_controller.getAllCustomers);
router.get("/parentcompany/product_of_customer/:id", pc_controller.getProductsByCustomer);
// router.get("/parentcompany/sold_products", pc_controller.getAllSoldProducts);

// cap account
router.post("/parentcompany/register", pc_controller.register);
// router.post("/parentcompany/manage_facility", (req, res) => {
//     console.log(req.body.choose_facility);
// });

// thong ke
// router.delete("/student/:id", pc_controller.deleteStudent);
// router.put("/student/:id", pc_controller.updateStudent);

module.exports = router;