import Router from "express";
import { userService } from "../services/index.js";

const userController = Router();

userController.post('/register', async (req, res) => {
   const { email, password } = req.body;

   await userService.register(email, password);
   res.status(201).end();
});

userController.post('/login', async (req, res) => {
   const { email, password } = req.body;

   try {
      const result = await userService.login(email, password);

      res.status(201).json(result);

   } catch (error) {
      res.status(401).json({ message: error.message });
   }
});

export default userController;