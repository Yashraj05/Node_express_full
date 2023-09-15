import mongoose from "mongoose";

const guser = new mongoose.Schema({
    id:{
        type : Number
    },
    name:{
        type :String
    },
    email:{
        type:String
    }

})

export const googleuser = mongoose.model("gusers",guser);