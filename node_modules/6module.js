var fs = require('fs');
var newFiles = [];

module.exports = function(directory, token, callback) {
  
  fs.readdir(directory, function(error, files) {
    if (error) {
      return callback(error);
    }

    for (i = 0; i < files.length; ++i) {
      if (files[i].indexOf("." + token) > -1) {
        newFiles.push(files[i]);
      }
    }

    callback(null, newFiles);
  });

}


// ANSWER

// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }
