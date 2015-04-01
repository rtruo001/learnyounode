var http = require('http');
var concat = require('concat-stream');
var url = process.argv[2];

http.get(url, function(response) {
  response.pipe(concat(function(data) {
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }))
});

// ANSWER

// var http = require('http')
// var bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err)
//       return console.error(err)
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))  
// })