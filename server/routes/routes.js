"use strict";

const express = require('express');
const routes = express.Router();

const tasksController = require("../controllers/tasksController");
const loginController = require("../controllers/loginController");

// ----------------------------------------
routes.post('/login', loginController.checkLogin);
routes.get('/tasks', tasksController.getTasks);


module.exports = routes;
