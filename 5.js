var fs = require('fs');
var directory = process.argv[2];
var token = "";
var files = "";

if (process.argv.length == 4) {
  token = process.argv[3];
}

fs.readdir(directory , function(error, files){
  for (i = 0; i < files.length; ++i) {
    if (files[i].indexOf("." + token) > -1) {
      console.log(files[i]);
    }
  }
});


// ANSWER

// var fs = require('fs')
// var path = require('path')

// fs.readdir(process.argv[2], function (err, list) {
//   list.forEach(function (file) {
//     if (path.extname(file) === '.' + process.argv[3])
//       console.log(file)
//   })
// })
