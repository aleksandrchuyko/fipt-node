import { NextFunction, Request, Response } from 'express';
import { IResponseError } from 'interfaces';

export const controllersWrapper = (
  ctrl: (req: Request, res: Response, next?: NextFunction) => void
) => {
  const wrap = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ctrl(req, res, next);
    } catch (error) {
      next(error as IResponseError);
    }
  };
  return wrap;
};
