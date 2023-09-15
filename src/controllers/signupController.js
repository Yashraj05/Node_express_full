import {users} from '../app.js'
export function signupController(req,res)
{
    const {name,password} = req.body;
    const newUser = {name,password};

    users.push(newUser);
    res.send("User successfully created");
    console.log(users);


}