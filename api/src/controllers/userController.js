import Router from "express";
import { userService } from "../services/index.js";

const userController = Router();

userController.post('/register', async (req, res) => {
   const { email, pasword } = req.body;

   await userService.register(email, pasword);
   res.status(201).end();
});

export default userController;