// tcp server (network server)
var net = require("net");
var port = 3003;

// Network connection using socket
var server = net.createServer(function (socket) {
  console.log("Server2-Connection from " + socket.remoteAddress);
  socket.end("Hello AA08! from localhost:3000");
});

server.listen(port, "127.0.0.1");
console.log("Network server started at port : " + port);
