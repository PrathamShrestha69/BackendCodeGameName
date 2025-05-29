import user from "../models/user.model.js";

export const registerNewUser = async (req, res) => {
  const data = req.body;

  const newUser = new user({ ...data });
  try {
    await newUser.save();
    res.status(200).send("got it");
  } catch (error) {
    res.status(400).send("failed to register user " + error.message);
  }
};

export const getUserInfo = async (req, res) => {
  const userUniqueID = req.params.userUniqueID;

  try {
    const userWithId = await user.findOne({ userUniqueID });

    res.status(200).send(userWithId);
  } catch (error) {
    res.status(400).send("Error getting user: " + error.message);
  }
};

export const setUserTeamAndRole = async (req, res) => {
  const userUniqueID = req.params.userUniqueID;
  const team = req.body.team;
  const role = req.body.role;
  try {
    const userWithId = await user.findOneAndUpdate(
      { userUniqueID },
      { userTeam: team, userRole: role }
    );
    res.status(200).send(userWithId);
  } catch (error) {
    res.status(400).send("Error getting user: " + error.message);
  }
};
