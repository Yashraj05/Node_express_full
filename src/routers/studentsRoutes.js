import express from "express";
import { createStudent } from "../controllers/createStudent.js";
import { readStudent } from "../controllers/readStudent.js";
import { updateStudent } from "../controllers/updateStudent.js";
import { deleteStudent } from "../controllers/deleteStudent.js";

export const student = express.Router();

student.use(express.json());


student.get('/:id',readStudent);
student.post('',createStudent);
student.put('/:id',updateStudent);
student.delete('/:id',deleteStudent);