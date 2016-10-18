//imports packages for the app.
var express = require("express");
var exphbs = require("express-handlebars");
var bodpars = require("body-parser");
var metover = require("method-override");

var app = express();
var port = process.env.port || 3000;

//sets the 'routes' variable to the exported routes from burgers_controller
var routes = require('./controllers/burgers_controller.js');

//creates middlewares for parsing different data responses, creates override to use delete
app.use(metover('_method'));
app.use(bodpars.json());
app.use(bodpars.urlencoded({extended:true}));
app.use(bodpars.text());
app.use(bodpars.json({type: "application/vnd.api+json"}));
app.use(express.static(process.cwd()+'/public'));

//sets the app engine to run handlebars, using main.handlebars as the default layout.
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//points the app to the controller file for routing/requests.
app.use('/', routes);

//starts the server
app.listen(port, function(){
});

