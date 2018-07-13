console.log("server.js is running...");


// Requirement variables
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

// Require database
require("./db/db");

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));

// Controller requirement
const actorController = require("./controllers/actorControllers");

// Route Establishment
app.use("/actors/", actorController);


// Server Listener
app.listen(3000, () => {
	console.log("server.js is listening on port 3000");
});











