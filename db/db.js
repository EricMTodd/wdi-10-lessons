console.log("db.js is running...");


// Establishing database connection
const mongoose = require("mongoose");

// Creating and linking actor database
const url = "mongodb://localhost:27017/actor";
mongoose.connect(url, { useNewUrlParser: true });


// Switches
mongoose.connection.on("connected", () => {
	console.log("Mongoose is connected");
});

mongoose.connection.on("error", (err) => {
	console.log(err, " Mongoose failed to connect");
});

mongoose.connection.on("disconnected", () => {
	console.log("Mongoose is disconnected");
});








