import { NextFunction, Request, Response } from 'express';

export interface IResponseError extends Error {
  code?: number;
}

export interface IController {
  (req: Request, res: Response): void;
}
