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
const pcRouter = require("./routes/pcRouter");
const faRouter = require("./routes/faRouter");

// use routers
app.use("/", pcRouter);
app.use("/", faRouter);


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
