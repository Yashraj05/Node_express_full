import express from "express";

import authenticateUser from "../middleware/authenticateUser.js";
import { generateToken } from "../middleware/generateToken.js";
import { loginjwtController } from "../controllers/loginjwtController.js";
import checkIfUserExists from "../middleware/checkIfUserExists.js";
import { signupController } from "../controllers/signupController.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { authorizeController } from "../controllers/authorizeController.js";

export const userRoutes = express.Router()

userRoutes.use(express.json());

userRoutes.post('/signup',checkIfUserExists,signupController);
userRoutes.post('/login',authenticateUser,generateToken,loginjwtController);
userRoutes.get('/service',verifyToken,authorizeController)
