// Use hot restaurant for Welcome Page. It has a button to use as well.

// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

var path = require("path");

// Tells node that we are creating an "express" server
var app = express();

// var bodyParser = require("body-parser");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;
console.log("localhost:8080")

// var jsonParser = bodyParser.json()

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(bodyParser.json[{ type: "application/++json"}])
// app.use(bodyParser.raw[{ type: "application/vnd.custom-type"}])
// app.use(bodyParser.text[{ type: "text/html"}])

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
