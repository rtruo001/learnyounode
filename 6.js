var mymodule = require('./node_modules/6module.js');
var directory = process.argv[2];
var token = process.argv[3];

mymodule(directory, token, function(error, files) {
  if (error)
   return console.error("Error", error);

  for (i = 0; i < files.length; ++i) {
      console.log(files[i]);
  }
});



// ANSWER

// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })