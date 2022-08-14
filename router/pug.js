const express = require('express');
const router = express.Router();

router.get('/pug-referance', (req, res, next) => {
  res.render('home');
});

module.exports = router;
