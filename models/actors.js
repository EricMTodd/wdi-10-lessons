console.log("actors.js is running...");


const mongoose = require("mongoose");

const actorSchema = new Schema({
	name: String,
	race: String,
	class: String
});


module.exports = mongoose.model("Actor", actorSchema);








