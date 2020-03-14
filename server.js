"use strict";

require("dotenv").config();
const express = require("express");
const bodyparser = require("body-parser");
const routes = require("./server/routes/routes");
const app = express();

// --------------------------------------
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use("/api/", routes);

// --------------------------------------
app.listen(process.env.PORT || 3000, () => {
	console.log(`Port ${process.env.PORT || 3000} running...`);
});
