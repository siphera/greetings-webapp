const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const greet = require('./greetings')
const flash = require('express-flash');
const session = require('express-session');
const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool ({
    database: 'greet',
    user: 'coder',
    host: 'localhost',
    password: 'coder123',
    port: 5432
})

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

app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
}));
app.use(flash());

app.get('/', function (req, res) {

    const greet = greetings.mygreeting();
    const counter = greetings.myCounter();

    res.render('index', {
        greet,
        counter
    });
});

app.post('/greetings', function (req, res) {


    const Name = req.body.Name;
    const language = req.body.language;

    if (Name === '' && language == null) {
        req.flash('info', 'Please enter a name and choose a language');
    } else if (Name === '') {
        req.flash('info', 'Please enter a name');
    } else if (language == null) {
        req.flash('info', 'Please choose a language');
    } else {
        greetings.logic(language, Name);
        req.flash('info', 'Name greeted');
    }

    res.redirect('/');
});

app.post('/reset', function (req, res) {
    greetings.reset();
    req.flash('info', 'Everything has been cleared');
    res.redirect('/');
});


const PORT = process.env.PORT || 3019;

app.listen(PORT, function () {
    console.log('App started at port', PORT);
});