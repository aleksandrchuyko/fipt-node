import { Request, Response } from 'express';

import { Student } from '../../models/students/student';
import { RequestError } from '../../utils';

export const removeById = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await Student.findByIdAndRemove(studentId);
  console.log(result);
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(201).json(result);
};
