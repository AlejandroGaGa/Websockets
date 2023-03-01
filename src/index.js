import express from "express";
import { Server as WebSocketServer } from "socket.io";
import http from "http";

const app = express();
const server = http.createServer(app);
const io = new WebSocketServer(server);

app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  console.log("Nueva conexión", socket.id);

  socket.on("client:newnote", (data) => {
    console.log(data);
  });
});

server.listen(2000);

console.log("Server listening on port", 2000);
