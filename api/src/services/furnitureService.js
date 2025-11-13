import Furniture from "../models/Furniture.js";

export function create(furnitureData, ownerId) {
   return Furniture.create({
      ...furnitureData,
      _ownerId: ownerId
   });
};

export function getAll(filter) {
   return Furniture.find(filter).select({
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

export function remove(furnitureId, userId) {
   return Furniture.findByIdAndDelete(furnitureId);
   // return Furniture.deleteOne({ id: furnitureId, _ownerId: userId });
}