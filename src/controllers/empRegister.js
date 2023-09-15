import { Employee } from "../models/employee.js";

export async function empRegister(req,res)
{
    try {
        
        const {email,username,password}  = req.body;

        const emp  = new Employee({
            email,
            username,
            password

        })

        await Employee.register(emp,password);

        

        res.send("employee registered");

    } catch (error) {
        res.send("error in saving into database");
    }
}