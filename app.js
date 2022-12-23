const express = require('express');
var bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.urlencoded());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


const pcRouter = require("./routes/pcRouter");


app.use("/", pcRouter);


app.get('/', function(req, res) {
    res.render('index');
});

app.get('/users', function(req, res) {
    res.render('users/index');
});


const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
