import express from 'express';
import { empRegister } from '../controllers/empRegister.js';

export const employee = express.Router();

employee.use(express.json())

employee.post("/register",empRegister)