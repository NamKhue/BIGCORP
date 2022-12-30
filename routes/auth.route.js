var express = require('express');
var router = express.Router();
let auth_controller = require("../controllers/auth.controller");

router.get("/login", auth_controller.uiLogin);

router.post("/login", auth_controller.login);

module.exports = router;