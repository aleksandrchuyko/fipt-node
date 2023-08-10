const path = require('path');
const fs = require('fs/promises');

import { Request, Response } from 'express';

const incomingDocDir = path.join(__dirname, '../../', 'public', 'incomingDocs');

const uploadCSV = async (req: Request, res: Response) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const extension = originalname.split('.').pop();
  const filename = `${_id}.${extension}`;
  const uploadFullPath = path.join(incomingDocDir, filename);

  await fs.rename(tempUpload, uploadFullPath);
  const incomingDocURL = path.join('incomingDocs', filename);


  res.status(200).json({
    incomingDocURL,
  });
};