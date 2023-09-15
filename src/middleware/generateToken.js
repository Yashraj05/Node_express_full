import  jwt from "jsonwebtoken";
import { secret_key } from "../app.js";
export function generateToken(req,res,next)
{
    const token  = jwt.sign({u_name : req.user.name},secret_key);
    req.token = token;
    next();
}