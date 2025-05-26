import user from "../models/user.model.js";

export const registerNewUser = async (req, res) => {
  const data = req.body;
  console.log({ ...data });
  const newUser = new user({ ...data });
  try {
    await newUser.save();
  } catch (error) {
    res.status(400).send("failed to register user ", error.message);
  }
  res.status(200).send("got it");
};

export const getUserInfo = async (req, res) => {
  const userUniqueID = req.params.userUniqueID;

  try {
    const userWithId = await user.findOne({ userUniqueID });
    console.log(userWithId);
    res.status(200).send(userWithId);
  } catch (error) {
    res.status(400).send("Error getting user: " + error.message);
  }
};

export const changeUserTeam = async (req, res) => {
  const userUniqueID = req.params.userUniqueID;
  const team = req.body.team;

  try {
    const userWithId = await user.findOneAndUpdate(
      { userUniqueID },
      { userTeam: team }
    );
    console.log(userWithId);
    res.status(200).send(userWithId);
  } catch (error) {
    res.status(400).send("Error getting user: " + error.message);
  }
};
