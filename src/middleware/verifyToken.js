import { secret_key } from "../app.js";
import jwt from 'jsonwebtoken'
export function verifyToken(req,res,next)
{
    const header = req.headers.authorization;
    const [bearer,token] = header.split(' ');
    console.log(token)
    if (!token) {
      return res.json({ message: 'Token not provided' });
    }
  
    try {
      const decoded = jwt.verify(token, secret_key);
      req.u_name = decoded.u_name;
      next();
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }

}