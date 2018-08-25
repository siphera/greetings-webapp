const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const greet = require('./greetings')
const flash = require('express-flash');
const session = require('express-session');

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

app.post('/greetings', function(req, res) {


  const Name = req.body.Name;
  const language = req.body.language;

  greetings.logic(language, Name);


  if (Name === '' || language == null) {
    req.flash('info', 'Please Enter a Name and Select a Language !')
  } else {
    greetings.logic(language, Name);
    // let  Set.myCounter() = 0;
  }

  res.redirect('/');

});

app.post('/reset', function (req, res) {
    greetings.reset();
    res.redirect('/');
});


const PORT = process.env.PORT || 3019;

app.listen(PORT, function () {
    console.log('App started at port', PORT);
});