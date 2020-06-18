const express = require('express');
const routes = express.Router();

const ProductControllers = require('./controllers/ProductControllers');

routes.get("/products", ProductControllers.index);

module.exports = routes;