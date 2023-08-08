import { Request, Response } from 'express';

import { Student } from '../../models/students/student';
import { RequestError } from '../../utils';

export const getById = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const result = await Student.findOne({ _id: studentId });
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(200).json(result);
};
