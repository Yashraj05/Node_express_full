import mongoose from "mongoose";

const uImages = mongoose.Schema({
    avatar : String,
    cloudinary_id: String
})

export const userImages = mongoose.model('userimg',uImages)