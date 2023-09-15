import express from "express";
import dotenv  from "dotenv"
import session from "express-session";
import passport from "passport";
import { userRoutes } from "./routers/usersRoutes.js";
import connectDB from "./helpers/mongoose.js";
import { product } from "./routers/productsRoutes.js";
import { uploadRoutes } from "./routers/uploadRoutes.js";
import { student } from "./routers/studentsRoutes.js";
import { employee } from "./routers/employeeRoutes.js";
import { Employee } from "./models/employee.js";
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import { deserializeUser, serializeUser } from "./configs/passport-config.js";
import { googleRoutes } from "./routers/googleuserRoutes.js";
import os from 'os';

// console.log(os.cpus);

dotenv.config({path:'/home/my/Desktop/express/.env'});
const port = process.env.PORT
const app = express();
export const secret_key = "my key";
export const users = [];
connectDB();
// app.get('/',(req,res)=>{
//     res.send("hello world i am yashraj")
// })
app.listen(port,()=>{
    console.log("hello world");
})

app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());
  
  // passport.use(Employee.createStrategy());
  
  // passport.serializeUser(Employee.serializeUser());
  // passport.deserializeUser(Employee.deserializeUser());
  
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback',
      },
      (accessToken, refreshToken, profile, done) => {
        serializeUser(profile, done);
      }
    )
  );
  
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);


app.use('/users',userRoutes);
app.use('/products',product);
app.use('/upload',uploadRoutes);
app.use('/students',student);
app.use("/employees",employee)
app.use('/',googleRoutes);