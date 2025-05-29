import { Server } from "socket.io";
const socketConfig = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    console.log("connection");

    socket.on("change-team-role", (infoObj) => {
      console.log(infoObj);
      socket.broadcast.emit("other-team-role-change", infoObj);
    });
  });
};

export default socketConfig;
