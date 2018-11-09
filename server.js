// Jacob Johnson - Ian Meadows
// Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications!
// require is a Node.js function that loads packages or libraries.
var express = require('express');
var app = express();

// ejs is a templating engine used to template HTML files.
// HTML requires us to hardcode data into it. However, the data in our database is dynamic, thus we would need HTML templates using which we generate HTML code.
app.set('view engine', 'ejs');


// The above is the boilerplate code that is required to set-up url-encoding
//sessions, cookies and flash messages for you webapp.
// Please google for more information on the same or consult your respective TAs.

var expressValidator = require('express-validator');
app.use(expressValidator());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var methodOverride = require('method-override');
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        var method = req.body._method;
        delete req.body._method;
        return method
    }
}));

var flash = require('express-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
app.use(cookieParser('csci3308'));
app.use(session({
    secret: 'csci3308',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}));
app.use(flash());


//Since we want to make our App modular we will create different modules - 
//index and store.  (Note: these module are created in Part 6 & 8  of this write-up)
//Each of these module defines certain routes and its handler of our application. 
//For more information on what routing is, refer to the following link: 
//https://expressjs.com/en/starter/basic-routing.html
var index = require('./routes/index');
var store = require('./routes/store');
app.use('/', index);
app.use('/store', store);

// This code snippet starts a server on your local machine on port number 4000.
var port = process.env.PORT;
app.listen(port, function () {
    console.log('Server running on http://localhost:' + port)
});