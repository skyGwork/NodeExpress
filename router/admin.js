// >basic setup
const express = require('express');
// for roiuter
const router = express.Router();
// servign html
const path = require('path');
const rootDir = require('../util/path');

router.get('/add-product', (req, res, next) => {
  res.render('add_product');
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
module.exports = router;
