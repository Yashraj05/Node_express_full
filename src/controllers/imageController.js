// import { v2 as cloudinary } from 'cloudinary';
// import dotenv from 'dotenv';
// dotenv.config({path:'/home/my/Desktop/express/.env'});
// cloudinary.config({ 
//     cloud_name: process.env.CLOUD_NAME, 
//     api_key: process.env.API_KEY, 
//     api_secret: process.env.API_SECRET,

// import cloudinary from "../utils/cloudinary.js";
import {userImages} from "../models/userImages.js"
import cloudinary from "../utils/cloudinary.js";

 
export async function imageController(req,res)
{

    const result = await cloudinary.uploader.upload(req.file.path);

    let user = new userImages({
        avatar : result.secure_url,
        cloudinary_id : result.public_id
    })

    await user.save();
        
   res.json({message : "uploaded",source : result.secure_url});
}