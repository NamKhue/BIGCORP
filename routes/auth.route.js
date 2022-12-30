var express = require('express');
var router = express.Router();
let auth_controller = require("../controllers/auth.controller");
// let authenticateToken = require("../middlewares/auth.middleware");

router.get("/login", auth_controller.uiLogin);

router.post("/login", auth_controller.login);

module.exports = router;