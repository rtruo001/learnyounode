var fs = require('fs');
var string = "";

function read(callback) {
    fs.readFile(process.argv[2] ,function(error, buf) {
    string = buf.toString();
    string = string.split("\n");
    callback();
  });
}

function totalEndl() {
  console.log(string.length-1);
}

if (process.argv.length == 3) {
  read(totalEndl);
}



// ANSWER

// var fs = require('fs')
// var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })
