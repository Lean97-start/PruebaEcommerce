"use strict";
const express_1 = require("express");
const Category_1 = require("./Category");
const filter_Products_1 = require("./filter_Products");
const Products_1 = require("./Products");
const searchProduct_1 = require("./searchProduct");
const router = (0, express_1.Router)();
router.use('/products', Products_1.routerProduct);
router.use('/filterProduct', filter_Products_1.routerFilterProduct);
router.use('/category', Category_1.routerCategory);
router.use('/search', searchProduct_1.routerSearch);
module.exports = { router };
