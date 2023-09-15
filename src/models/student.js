import mongoose from "mongoose";

const student = new mongoose.Schema({

    roll:{
        type : Number,
        require : true,
        unique : true
    },
    name:{
        type : String,
        require : true,

    },
    marks : [
        {
            maths :{
                type : Number,
                require : true
            },
            eng :{
                type : Number,
                require : true
            },
            hindi :{
                type : Number,
                require : true
            }
        }
    ]
})

export const Student = mongoose.model("students",student);