var net = require('net')
var port = process.argv[2]
var date = new Date()
var data = ""

var server = net.createServer(function (socket) {

  data = date.getFullYear().toString() + "-"
  
  if (date.getMonth() < 10)
    data += '0'
  month = date.getMonth() + 1
  data += month.toString() + "-" 

  if (date.getDate() < 10)
    data += '0'   
  data += date.getDate() + " " 
  
  if (date.getHours() < 10)
    data += '0'
  data += date.getHours() + ":"

  if (date.getMinutes() < 10)
    data += '0'
  data += date.getMinutes()
  
  socket.write(data)
  socket.end()
})

server.listen(port)



// ANSWERS

// var net = require('net')
    
// function zeroFill(i) {
//   return (i < 10 ? '0' : '') + i
// }

// function now () {
//   var d = new Date()
//   return d.getFullYear() + '-'
//     + zeroFill(d.getMonth() + 1) + '-'
//     + zeroFill(d.getDate()) + ' '
//     + zeroFill(d.getHours()) + ':'
//     + zeroFill(d.getMinutes())
// }

// var server = net.createServer(function (socket) {
//   socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))

