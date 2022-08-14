// > basic setup

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const path = require('path');

const PORT = process.env.PORT || 3000;
const hostName = '127.0.0.1';

const adminRoute = require('./router/admin');
const shopRoute = require('./router/shop');
const pugRoute = require('./router/pug');

app.use(bodyParser.urlencoded({ extended: false }));

// default templating engine
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute);
app.use(shopRoute);
app.use(pugRoute);
//

app.use((req, res, next) => {
  res.render('404');
});

//! LISTEN APP
app.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}/`);
});
// test b6
