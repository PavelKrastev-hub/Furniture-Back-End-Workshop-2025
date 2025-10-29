import { Router } from "express";
import { furnitureService } from "../services/index.js";

const furnitureController = Router();

furnitureController.get('/', (req, res) => {
   res.json([]);
});

furnitureController.post('/', async (req, res) => {
   const furnitureData = req.body;
   console.log(req.body);
   // try {
      const furniture = await furnitureService.create(furnitureData);
      res.status(201).json(furniture);
   // } catch (error) {

   // }
});

export default furnitureController;