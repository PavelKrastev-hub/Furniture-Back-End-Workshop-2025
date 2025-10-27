import Router from "express";

const userController = Router();

userController.post('/register', (req, res) => {
   const {email, pasword} = req.body;

   
   res.end();
});

export default userController;