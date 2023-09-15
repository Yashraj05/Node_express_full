import mongoose from "mongoose";

const pschema = new mongoose.Schema(
{
    id:{
        type : Number,
        required: true,
        unique: true,
    },
    name :{
        type : String,
        required : true 
    },
    price :{
        type : Number
    }
},{timestamps:true})

export const product = mongoose.model("products",pschema)