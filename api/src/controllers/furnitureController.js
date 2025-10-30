import { Router } from "express";
import { furnitureService } from "../services/index.js";
import Furniture from "../models/Furniture.js";

const furnitureController = Router();

furnitureController.get('/', async (req, res) => {
   const furnitures = await furnitureService.getAll();
   res.json(furnitures || []);
});

furnitureController.post('/', async (req, res) => {
   const furnitureData = req.body;
   const ownerId = req.user.id;

   // try {
   const furniture = await furnitureService.create(furnitureData, ownerId);
   res.status(201).json(furniture);
   // } catch (error) {

   // }
});

furnitureController.get('/:furnitureId', async (req, res) => {
   const furnitureId = req.params.furnitureId;

   const furniture = await furnitureService.getOne(furnitureId);

   res.json(furniture);
});

furnitureController.put('/:furnitureId', async (req, res) => {
   const furnitureId = req.params.furnitureId;
   const furnitureData = req.body;
   try {
      const furniture = await furnitureService.update(furnitureId, furnitureData)

      res.json(furniture);
   } catch (error) {
      
   }
});



export default furnitureController;