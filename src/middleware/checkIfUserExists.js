import { users } from "../app.js";

export default function checkIfUserExists(req,res,next)
{
    const {name}  = req.body
    const user = users.find((u)=>u.name===name);
    if(user)
    {
        res.send("user already present");
    }
    else{
        next();
    }
}