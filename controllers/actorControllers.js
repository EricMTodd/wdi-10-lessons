console.log("actorControllers is running...");


const express = require("express");
const router = express.Router();
const Actors = require("../models/actors");


// Index Route
router.get("/", (req, res) => {
	Actors.find({}, (err, allActors) => {
		if (err) {
			res.render(err);
		} else {
			res.render("index.ejs", {
				"actorsList": allActors
			})
		}
	})
});








