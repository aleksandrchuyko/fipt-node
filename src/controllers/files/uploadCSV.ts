import path from 'path';
import fs from 'fs/promises';

import { Request, Response } from 'express';

const incomingDocDir = path.join(__dirname, '../../', 'public', 'docs');

export const uploadCSV = async (req: Request, res: Response) => {
  if (req.file) {
    const { path: tempUpload, originalname } = req.file;
    const extension = originalname.split('.').pop();
    const filename = `students.${extension}`;
    const uploadFullPath = path.join(incomingDocDir, filename);

    await fs.rename(tempUpload, uploadFullPath);
    const incomingDocURL = path.join('docs', filename);

    res.status(200).json({
      incomingDocURL,
    });
  } else {
    res.end();
  }
};
