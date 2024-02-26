import { Request, Response } from 'express';
import { Student } from '../../models/students/student';


export const addNew = async (req: Request, res: Response) => {
  const student = { ...req.body };
  const result = await Student.create(student);
  res.status(201).json(result);
};
