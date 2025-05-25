import user from "../models/user.model.js";

export const registerNewUser = async (req, res) => {
  const data = req.body;
  const newUser = new user({ ...data });
  await newUser.save();

  res.status(200).send("got it");
};

export const getUsers = async (req, res) => {
  console.log(req.body);
};
