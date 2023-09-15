import { Student } from "../models/student.js";

export async function deleteStudent(req,res)
{
    try {
        const {id} = req.params;

        const std = await Student.updateOne({id},{$pull : {marks: "eng"}});

        console.log(std);

        res.send("deleted");

    } catch (error) {
        res.send(error);
    }
}