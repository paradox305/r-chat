const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIO(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected.");

  socket.on("disconnect", () => {
    console.log("A user disconnected.");
  });

  socket.on("message", (message) => {
    console.log(message, "message at server");
    io.emit("message", message);
  });
});

server.listen(3001, () => {
  console.log("Socket.IO server listening on port 3001");
});
