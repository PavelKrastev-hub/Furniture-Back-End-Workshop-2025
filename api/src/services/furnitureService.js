import Furniture from "../models/Furniture.js";

export function create(furnitureData, ownerId) {
   return Furniture.create({
      ...furnitureData,
      _ownerId: ownerId
   });
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
};

export function update(furnitureId, furnitureData) {
   return Furniture.findByIdAndUpdate(furnitureId, furnitureData, { runValidators: true });
};

export function remove(furnitureId) {
   return Furniture.findByIdAndDelete(furnitureId);
}