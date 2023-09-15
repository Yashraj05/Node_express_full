
import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';
const employee = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
});

employee.plugin(passportLocalMongoose);

export const Employee = mongoose.model('Employees', employee);


