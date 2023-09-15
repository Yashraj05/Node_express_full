import { userImages } from "../models/userImages.js";
import cloudinary from "../utils/cloudinary.js";

export async function updateImgController(req,res)
{
    const {id} = req.params;

    const img = await userImages.findById(id);
    console.log(img)
    console.log(req.file)

    await cloudinary.uploader.destroy(img.cloudinary_id);

    
    const uimg = await cloudinary.uploader.upload(req.file.path);

    const data = {
        avatar : uimg.secure_url,
        cloudinary_id : uimg.public_id
    }
    const user = await userImages.findByIdAndUpdate(id,data);

    console.log(user);

    res.send(user);




}