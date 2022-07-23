// basic setup

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
app.use(adminRoute);
app.use(shopRoute);

//! LISTEN APP
app.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}/`);
});