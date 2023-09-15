import express from 'express';
import { upload } from '../middleware/multer.js';
import { fileController } from '../controllers/fileController.js';
import { imageController } from '../controllers/imageController.js';
import { videoController } from '../controllers/videoController.js';
import {updateImgController} from '../controllers/updateImgController.js'

export const uploadRoutes = express.Router();
 uploadRoutes.use(express.json());

// uploadRoutes.post('/file',upload.array('files',3),fileController);
uploadRoutes.post('/',upload.single('file'),imageController);
// uploadRoutes.post('/video',upload.single('file'),videoController)
uploadRoutes.put('/:id',upload.single('file'),updateImgController);
