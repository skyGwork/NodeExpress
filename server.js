// > basic setup

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 3000;
const hostName = '127.0.0.1';

const adminRoute = require('./router/admin');
const shopRoute = require('./router/shop');

const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute);
app.use(shopRoute);
// 

app.use((req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', '404.html'));
});

//! LISTEN APP
app.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}/`);
});
