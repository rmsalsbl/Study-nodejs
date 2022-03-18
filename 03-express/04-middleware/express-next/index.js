// require dotenv
require("dotenv").config();
// import express
const express = require("express");
// import body-parser "adalah middleware untuk menyaring data request"
const bodyParser = require("body-parser");
// import module headers
const headers = require("./middlewares/headers");
// import module body
const body = require("./middlewares/body");


// // Middleware body parser json
// app.use(bodyParser.json(), (req, res, next) => {
//   // console.log(req.headers)//params//query.nama//body
//   console.log("METHOD: ", req.method);
//   console.log("URL Path: ", req.path);
//   console.log("Headers: ", req.headers);
//   console.log("query: ", req.query);
// });

// instantiate express
const app = express();

// Middleware 1 yaitu body parser "untuk semua method request pada url"
// Middleware kedua menampilkan headers dari request
app.use('/', bodyParser.json(), headers);

// Middleware hanya berlaku pada method post di request
// Middleware untuk method POST pada url 
// tampilan isi dari request body menggunakan midddleware body
// Tampilan data request body ke cilent
app.post('/', bodyParser.urlencoded({ extended: true }), body, (req, res) => {
  // Kirimkan object request body jika method POST
  return res.send(req.body);
});

// Kirimkan header jika tidak method POST
// middleware untuk selain method POST di index
app.use('/', (req, res, next) => {
  return res.send(req.headers);
});
// port
app.listen(process.env.PORT, () => {
  console.log(`Server berjalan di port ${process.env.PORT}`);
});