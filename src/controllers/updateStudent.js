import { Student } from "../models/student.js";
import mongoose from "mongoose";
export async function updateStudent(req,res)
{
    
        const {roll} = req.params;
        const studentId = new mongoose.Types.ObjectId('64f04b9fa25b8a62519c2952');
        const marksSubdocumentId = new  mongoose.Types.ObjectId("64f04f772ecd9ced2c02d6d5") ;

        console.log(studentId);
        // const{maths,eng,hindi} = req.body

        // const std = await Student.updateOne({roll},{ $push : {marks :    {maths,eng,hindi}}});


        // const std1 = await Student.updateOne({roll,marks:{ $elemMatch : { "eng" : 90} }},{ $set : {"marks.$.eng": 120}})

        const std2 = await Student.findOneAndUpdate({ _id: studentId, "marks._id": marksSubdocumentId },{ $set : {"marks.$.maths": 0}})

        res.send("updated");
}
