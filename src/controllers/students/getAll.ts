import { Request, Response } from 'express';
import { Student } from '../../models/students/student';

export const getAll = async (req: Request, res: Response) => {
  const result = await Student.find({}, '-updatedAt');
  res.status(200).json(result);
};

