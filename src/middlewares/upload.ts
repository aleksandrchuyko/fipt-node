import { Request } from 'express';
const multer = require('multer');
const path = require('path');

const tempDir = path.join(__dirname, '../', 'temp');

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req: Request, file: { originalname: any; }, cb: (arg0: null, arg1: any) => void) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage: multerConfig,
});