const dotenv = require('dotenv');
// get config vars
dotenv.config();

// import packages
const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
// const cors = require('cors');
// const createError = require('http-errors');

const app = express();

// pug template
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(express.static('public'));

// import routers
const auth_router = require("./routes/auth.route");
const pc_router = require("./routes/pc.route");
const fa_router = require("./routes/fa.route");
const da_router = require("./routes/da.route");
const wc_router = require("./routes/wc.route");
let authMiddleware = require('./middlewares/auth.middleware');

// use routers
app.use("/", auth_router);

app.use("/", pc_router);
app.use("/", fa_router);
app.use("/", da_router);
app.use("/", wc_router);

// app.use("/", authMiddleware.requiredAuth, pc_router);
// app.use("/", authMiddleware.requiredAuth, fa_router);
// app.use("/", authMiddleware.requiredAuth, da_router);
// app.use("/", authMiddleware.requiredAuth, wc_router);

// set port for running server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
