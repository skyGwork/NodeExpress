// >basic setup
const express = require('express');
// for roiuter
const router = express.Router();
// servign html
const path = require('path');

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add_product.html'));
});

router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});
module.exports = router;
