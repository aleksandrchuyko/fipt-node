import { Request, Response } from 'express';

import { Student } from '../../models/students/student';
import { RequestError, parseDates } from '../../utils';

export const updateById = async (req: Request, res: Response) => {
  const { studentId } = req.params;
  const student = { ...req.body };
  student.dates = parseDates(student.content);
  const result = await Student.findByIdAndUpdate(studentId, student, {
    new: true,
  });
  if (!result) {
    throw RequestError(404, 'Not found');
  }
  res.status(201).json(result);
};
