//This code snippet defines the index (/) route and renders the index.ejs 
//template when a request is made to the index route. 
//Note: The index.ejs template is created in Part 8 of this document.
//For more information on the render function and HTML templating using ejs 
//it is highly recommended that you read through this link: 
//https://www.codementor.io/naeemshaikh27/node-with-express-and-ejs-du107lnk6
var express = require('express');
var app = express();

app.get('/', function (request, response) {
   // render the views/index.ejs template file
   response.render('index', {title: 'Lab 9 - Integration using Node.js'})
});

module.exports = app;