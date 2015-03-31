var arguments = process.argv;
var sum = 0;

if (arguments.length > 2) {
  for (i = 2; i < arguments.length; ++i) {
    sum += Number(process.argv[i]);
  }
}

console.log(sum);




// ANSWER

// var result = 0
    
// for (var i = 2; i < process.argv.length; i++)
//   result += Number(process.argv[i])

// console.log(result)
