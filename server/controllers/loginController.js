"use strict";

const dbConnection = require("../database/DBConnection");

module.exports = {
	checkLogin: (req, res) => {
		let query = "SELECT * FROM tbl_user WHERE userName = ? AND password = ?";
		console.log(req.body);
		dbConnection.query(
			query,
			[req.body.userName, req.body.password],
			(err, response) => {
				if (err || !response.length) {
					res.status(500).send({
						statusCode: "500",
						message : "Login failed!"
					});
				} else res.json(response[0]);
			}
		);
	}
};
