import path from 'path';
import fs from 'fs/promises';

import { Request, Response } from 'express';

const incomingDocDir = path.join(__dirname, '../../', 'public', 'docs');

export const uploadBachelors = async (req: Request, res: Response) => {
  if (req.file) {
    const { path: tempUpload, originalname } = req.file;
    const extension = originalname.split('.').pop();
    const filename = `bachelors.${extension}`;
    const uploadFullPath = path.join(incomingDocDir, filename);

    await fs.rename(tempUpload, uploadFullPath);
    const incomingDocURL = path.join('docs', filename);

    res.status(201).json({
      incomingDocURL,
    });
  } else {
    res.end();
  }
};
