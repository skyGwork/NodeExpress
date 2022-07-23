// > basic setup

const express = require('express');
const bodyParser = require('body-parser');
//initiate express
const app = express();
const path = require('path');
//app listening
const PORT = process.env.PORT || 3000;
const hostName = '127.0.0.1';
// req.body
app.use(bodyParser.urlencoded({ extended: false }));
// imports
const adminRoute = require('./router/admin');
const shopRoute = require('./router/shop');

const rootDir = require('./util/path');

//initiate imports
app.use('/admin', adminRoute);
app.use(shopRoute);

// 404 PAGE NOT FOUND
app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'));
});

//! LISTEN APP
app.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}/`);
});
