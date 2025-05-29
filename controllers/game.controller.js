import roomModel from "../models/games.model.js";
import userModel from "../models/user.model.js";

export const createNewRoom = async (req, res) => {
  const roomName = req.params.roomname;
  const { adminUserId } = req.body;

  const adminUser = await userModel.findOne({ userUniqueID: adminUserId });
  const newRoom = new roomModel({ roomCode: roomName, adminUser: adminUser });

  try {
    await newRoom.save(newRoom);
    res.status(200).send("Sucessfully created room");
  } catch (error) {
    res.status(400).send("Eror" + error.message);
  }
};

export const changeRoomDetails = () => {};

export const getRoomDetails = async (req, res) => {
  const roomName = req.params.roomname;

  const roomInDb = await roomModel
    .findOne({ roomCode: roomName })
    .populate("adminUser", "userUniqueID");

  res.status(200).send(roomInDb);
};

// export const isRoomNameAvailabe = async () => {
//   console.log(req.params.roomName);
// };
