// > basic setup

const express = require('express');
const bodyParser = require('body-parser');
//initiate express
const app = express();
//app listening
const PORT = process.env.PORT || 3000;
const hostName = '127.0.0.1';
// req.body
app.use(bodyParser.urlencoded({ extended: false }));
// imports
const adminRoute = require('./router/admin');
const shopRoute = require('./router/shop');

//initiate imports
app.use('/admin', adminRoute);
app.use(shopRoute);

// 404 PAGE NOT FOUND
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

//! LISTEN APP
app.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}/`);
});
