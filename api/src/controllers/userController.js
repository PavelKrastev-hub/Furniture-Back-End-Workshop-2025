import Router from "express";
import { userService } from "../services/index.js";

const userController = Router();

userController.post('/register', async (req, res) => {
   const { email, password } = req.body;

   await userService.register(email, password);
   res.status(201).end();
});

userController.post('/login', (req, res) => {
   const {email, password} = req.body;

   
});

export default userController;