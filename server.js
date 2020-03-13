"use strict";

require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const app = express();
// -------------------------------------- 
app.use(express.json());

// --------------------------------------
routes(app);

// --------------------------------------

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Port ${PORT} running...`);
});
