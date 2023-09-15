import { Student } from "../models/student.js";

export async function readStudent(req,res)
{
    const { roll} = req.params;

    const std = await Student.findOne({roll});

    if(std)
    {
        res.json({message : "Student found",std});
    }
    else{
        res.json({message : "no student with this roll no"});
    }
}