import { NextFunction, Request, Response } from 'express';
import Joi from 'joi';

import { RequestError } from "../utils";

export const validateReqBody = (schema: Joi.ObjectSchema) => {
  const wrap = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      next(RequestError(400, error.message));
    }
    next();
  };
  return wrap;
};

