import { Request, Response } from 'express';
import { Student } from '../../models/students/student';
import { parseDates } from '../../utils/index';

export const addNew = async (req: Request, res: Response) => {
  const student = { ...req.body, dates: parseDates(req.body.content) };
  const result = await Student.create(student);
  res.status(201).json(result);
};
