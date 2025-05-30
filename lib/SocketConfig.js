import { Server } from "socket.io";

const rooms = {};

const socketConfig = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    socket.on("join-room", ({ userId, roomCode }) => {
      socket.join(roomCode);
      if (!rooms[roomCode]) {
        rooms[roomCode] = {};
      }

      rooms[roomCode][socket.id] = userId;

      console.log("✅ Current Rooms:", rooms);

      console.log("length: ", Object.keys(rooms[roomCode]).length);

      io.to(roomCode).emit("user-num-change", {
        noOfUser: Object.keys(rooms[roomCode]).length,
      });
    });

    socket.on("change-team-role", (infoObj) => {
      console.log(infoObj);

      socket.broadcast.emit("other-team-role-change", infoObj);
    });

    socket.on("disconnect", (reason) => {
      console.log(reason);
      for (const roomCode in rooms) {
        const room = rooms[roomCode];
        if (room.hasOwnProperty(socket.id)) {
          delete room[socket.id];
          console.log(`🧼 Removed ${socket.id} from room ${roomCode}`);
          io.to(roomCode).emit("user-num-change", {
            noOfUser: Object.keys(rooms[roomCode]).length,
          });
        }
      }
    });
  });
};

export default socketConfig;
