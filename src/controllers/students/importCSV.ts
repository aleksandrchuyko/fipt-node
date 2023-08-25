import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { PATH_DB, PATH_MAGISTERS } from '../../constants';
import { prepareData } from 'repositories';

export const importCSV = async (req: Request, res: Response) => {
  try {
    
    
    const dbPath = path.join(__dirname, '../../', PATH_DB);
    // if (fs.existsSync(dbPath)) {
    //   fs.unlinkSync(dbPath);
		// }
		
		const compositionPath = path.join(__dirname, '../../', PATH_MAGISTERS);
		prepareData(compositionPath);

    res.status(200).json({
      path: compositionPath,
    });
  } catch (error) {
    console.log(error);
    res.end();
  }
};
