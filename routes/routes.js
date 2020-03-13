"use strict";
const tasksController = require("../controllers/tasksController");
// ----------------------------------------
module.exports = function(app) {
	app.route("/api/tasks").get(tasksController.getTasks);
};
