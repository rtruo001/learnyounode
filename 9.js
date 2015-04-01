var http = require('http')
var concat = require('concat-stream')
var results = []
var count = 0;

for (i = 2; i < 5; ++i) {
  httpGet(i);
}

function httpGet(index) {
  http.get(process.argv[index], function(response) {
    response.pipe(concat(function(data) {
      data = data.toString()
      results[index-2] = data
      ++count;
    
      if (count == 3) {
        for (j = 0; j < 3; ++j) {
          console.log(results[j])
        }
      }
    }))
  })
}



// ANSWER

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0

// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)

//       results[index] = data.toString()
//       count++

//       if (count == 3)
//         printResults()
//     }))
//   })
// }

// for (var i = 0; i < 3; i++)
//   httpGet(i)

