// Express

const express = require('express');
const app = express();

//app listening
const PORT = process.env.PORT || 3000;
const hostName = '127.0.0.1';

//execution-of-post-requests
const bodyParser = require('body-parser');

//req.body
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product', (req, res, next) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
  );
});

app.post('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});


//*********
//_Handling different routes_ -->

/*
app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

app.use('/add-product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});
app.use('/product', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>The "Product" Page</h1>');
});

//home route at the end###

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});
*/

//********************************
// _some more example_

/*
app.use(function (req, res, next) {
  console.log('01st log');
  // res.send('Massage to the World!');
  next();
});

app.use((req, res, next) => {
  console.log('02nd log');
//   res.send('<h1>Hello world</h1>');
  next();
});
app.use((req, res) => {
  console.log('3rd log');
  res.send('<p>contact me @: skygwork.com</p>');
});
*/

// *******************
//res.send: in middleware

/*
app.use((req, res, next) => {
  console.log('In the middleware!');
  next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});
*/

//! app listen
app.listen(PORT, hostName, () => {
  console.log(`Server running at http://${hostName}:${PORT}/`);
});
