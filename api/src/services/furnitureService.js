import Furniture from "../models/Furniture.js";

export function create(furnitureData) {
   return Furniture.create(furnitureData);
};

export function getAll() {
   return Furniture.find().select({
      description: true,
      price: true,
      img: true,
   });
};

export function getOne(furnitureId) {
   return Furniture.findById(furnitureId);
}