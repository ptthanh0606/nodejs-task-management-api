"use strict";

const dbConnection = require("../DBConnection");

// ----------------------------------------------
module.exports = {
	getTasks: (req, res) => {
		let sqlQuery = "SELECT * FROM tbl_task";
		dbConnection.query(sqlQuery, "", (error, response) => {
			if (error) console.log(error);
			else res.json(response);
		});
	}
};
