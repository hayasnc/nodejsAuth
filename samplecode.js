// // var http = require('http');
// // var url =  require('url');
// // var fs = require('fs');
// // var dateNow = require('./dateModule');
// // var events = require('events');
// // var eventEmitter = new events.EventEmitter();
// // var myEventEmitterfunction =  function() {
// //     console.log('ss');
// // }

// // eventEmitter.on('hi', myEventEmitterfunction);
// // eventEmitter.emit('hi');

// // http.createServer(function(req, res) {
// // res.writeHead(200,{'Content-Type':'text/html'});
// //     var q = url.parse(req.url, true).query;
// //     fs.readFile('./index.html', function(err, data){
// //         res.write(data);
// //         res.end('Hayas'+ dateNow.getCurrentDate());
// //     });
// // }).listen(8080);


// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var myfun = function () {
//     console.log('asdsa');
// }
// eventEmitter.on('name', myfun);

// eventEmitter.emit('name');

// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');

// http.createServer(function (req, res) {
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function (err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function (err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//  });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
//     res.write('<input type="file" name="filetoupload"><br>');
//     res.write('<input type="submit">');
//     res.write('</form>');
//     return res.end();
//   }
// }).listen(8080);

// var nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'hayasnc@gmail.com',
//     pass: 'gmmerajaan'
//   }
// });

// var mailOptions = {
//   from: 'hayasnc@gmail.com',
//   to: 'hayas@qburst.com',
//   subject: 'Sending Email using Node.js',
//   html: '<h1>Welcome</h1><p>That was easy!</p>'
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });
