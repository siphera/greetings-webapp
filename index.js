const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const greet = require('./greetings')


//instantiate instance
const app = express();
const greetings = greet();

//setup handlebars as middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//set up middleware to find the css files in the public directory
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.render('index', {

    });
});



const PORT = process.env.PORT || 3019;

app.listen(PORT, function () {
    console.log('App started at port', PORT);
});