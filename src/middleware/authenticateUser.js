import { users } from "../app.js"

export default function authenticateUser(req,res,next)
{  console.log(req.body)
    const {password} = req.body;

    const user = users.find((u)=>u.password===password)
    console.log(user)   
    if(!user)
    {
        res.send("not a valid user");
    }
    else{
        req.user = user;
        next();
        
    }
}