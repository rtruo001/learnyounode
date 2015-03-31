var fs = require('fs');

if (process.argv.length == 3) {
  buf = fs.readFileSync(process.argv[2]);
  string = buf.toString();
  string = string.split("\n");
}

console.log(string.length-1);



// ANSWER

// var fs = require('fs')
    
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
