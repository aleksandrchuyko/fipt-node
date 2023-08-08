import { NextFunction } from 'express';
import { MongoError } from 'mongodb';
import { IResponseError } from 'interfaces';

export const handleMongoSaveError = (error: IResponseError, data: any, next: NextFunction) => {
  const { code, name } = error as MongoError;
  error.code = name === 'MongoServerError' && code === 11000 ? 409 : 400;
  next();
};
