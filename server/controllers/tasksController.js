"use strict";

const dbConnection = require("../database/DBConnection");

// ----------------------------------------------
module.exports = {
	getTasks: (req, res) => {
		let sqlQuery = `SELECT t.*
			FROM tbl_task t
			WHERE t.assigneeID = ? AND t.taskStatus = ?`;
		dbConnection.query(sqlQuery, [req.query.userName, req.query.taskStatus], (error, response) => {
			if (error || !response.length) {
				res.status(500).send({
					message: "Server error"
				});
			} else {
				response.map(task => {
					task.createDate = task.createDate.toDateString();
				});
				res.json(response);
			}
		});
	}
};
