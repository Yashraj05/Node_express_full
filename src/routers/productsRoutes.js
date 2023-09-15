import express from "express";
import { readpController } from "../controllers/readpController.js";
import { createpController } from "../controllers/createpController.js";
import { updatepController } from "../controllers/updatepController.js";
import { deletepController } from "../controllers/deletepController.js";

export const product = express.Router();

product.use(express.json());

product.get('/:id',readpController);
product.post('/',createpController);
product.put('/:id',updatepController);
product.delete('/:id',deletepController);