import { Request } from 'express';
import multer from 'multer';
import path from 'path';

const tempDir = path.join(__dirname, '../', 'temp');

const multerConfig = multer.diskStorage({
  destination: tempDir,
  filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage: multerConfig,
  limits: {
    fileSize: 1048576,
  },
});