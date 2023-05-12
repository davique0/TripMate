import { Server } from "socket.io"

export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    console.log("Socket is already running");
    res.end();
    return;
  }
  console.log("Socket is initializing")
  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    socket.on("send", (data) => {
      console.log("Backend data", data)
      socket.to(data.room).emit("receive", data)
    })

    socket.on("join_room", (data) => {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`)
    })

    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id)
    })
  })
  res.end()
}

