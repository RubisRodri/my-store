//const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./user.router');

function routerApi(app){
   // const router = express.Router();
    //app.use('/api/v1', router)
    app.use('/products', productsRouter);
    app.use('/categories', categoriesRouter);
    app.use('/users', usersRouter);
}

module.exports = routerApi;