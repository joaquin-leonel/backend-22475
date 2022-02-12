const express= require('express');
const productsRoutes = require('./products/products.routes.js')
const fileRoutes = require('./files/files.routes.js')

const router= express.Router();

//middlewares
router.use(express.json());
router.use(express.urlencoded({extended: true}));

//routes
router.use('/products', productsRoutes)
router.use('/files', fileRoutes)

module.exports=router;