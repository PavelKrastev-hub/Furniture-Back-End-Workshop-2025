import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes.js";

const app = express();
try {
   await mongoose.connect('mongodb://localhost:27017', {
      dbName: 'furniture-sept-2025'
   });

   console.log('Connected to DB successfully!');
} catch (error) {
   console.error('Cannot connect to DB!')
   console.error(error.message);
}

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3030, () => 'Server is listening on http://localhost:3030...');