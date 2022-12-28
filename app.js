// import packages
const express = require('express');
var bodyParser = require('body-parser');

const app = express();

// pug template
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// import routers
const pc_router = require("./routes/pc_router");
const fa_router = require("./routes/fa_router");
const da_router = require("./routes/da_router");
const wc_router = require("./routes/wc_router");

// use routers
app.use("/", pc_router);
app.use("/", fa_router);
app.use("/", da_router);
app.use("/", wc_router);


// sample UI
// app.get('/', function(req, res) {
//     res.render('index');
// });

// app.get('/users', function(req, res) {
//     res.render('users/index');
// });


// set port for running server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
