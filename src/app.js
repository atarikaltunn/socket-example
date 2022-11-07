const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
require("dotenv").config();

const pageRoute = require("./routes/pageRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use("/", pageRoute);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on('chat message', (msg)=>{
      io.emit('chat message', msg)
  })
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
