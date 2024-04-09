import { hashSync } from "bcrypt";
import user from "../models/user";
import User from "../models/user";
import { hashPassword, comparePassword } from "../utils/auth";

export const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, password } = req.body;
    // Validation for name
    if (!name) {
      return res.status(400).send("Name is required");
    }
    // Validation for password
    if (!password) {
      return res
        .status(400)
        .send("Password is required and should be min 6 characters long");
    }
    // Validation for email
    let userExist = await User.findOne({ email }).exec();
    if (userExist) {
      return res.status(400).send("Email is already taken");
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    // register/save the user
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });
    await user.save();
    // console.log("saved user", user);
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try Again");
  }
};
