var express = require("express");
var methodOverride = require ("method-override")
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");





// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use("/",routes);

// Start our server so that it can begin listening to client requests.
var port = 3000
app.listen(port);
