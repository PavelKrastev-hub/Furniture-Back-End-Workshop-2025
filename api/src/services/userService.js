import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function register(email, password) {
   return User.create({ email, password });
};

export async function login(email, password) {
   const user = await User.findOne({ email });

   if (!user) {
      throw new Error('Invalid user or password!');
   };

   const isValid = await bcrypt.compare(password, user.password);

   if (!isValid) {
      throw new Error('Invalid user or password!');
   };

   const payload = {
      id: user.id,
      email: user.email,
   };

   const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '2h' });

   return {
      _id: user.id,
      email: user.email,
      accessToken: token,
   };
};