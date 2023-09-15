import { Student } from "../models/student.js";

export async function createStudent(req,res)
{
    try {
        const {roll,name,marks} = req.body;

        const std = new Student({
            roll,
            name,
            marks
        })
    
        await std.save();
    
        res.send("student added successfully");
        
    } catch (error) {

        if (error.code === 11000) {
            res.json({ message: 'student with this roll number  already exists, please choose a different roll no' });
          } else {
            res.json({ message: 'An error occurred'});
        }
        
    }
   


    
}