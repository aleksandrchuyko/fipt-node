import { IResponseError } from 'interfaces';

type codes = 400 | 401 | 403 | 404 | 409;

const messages = {
  400: 'Bad request',
  401: 'Unauthorized user',
  403: 'Forbidden',
  404: 'Page not found',
  409: 'Conflict',
};

export const RequestError = (status: number | codes, message = messages[status as codes]) => {
  const error: IResponseError = new Error(message);
  error.code = status;
  return error;
};

