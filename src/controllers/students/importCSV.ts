import fs from 'fs';
import path from 'path';
import { Request, Response } from 'express';
import { PATH_DB, PATH_MAGISTERS, PATH_BACHELORS } from '../../constants';
import { prepareData } from 'repositories';
import { createMany } from 'repositories/createMany';
import { clearData } from 'repositories/clearData';

export const importCSV = async (req: Request, res: Response) => {
  try {
    
    
    // const dbPath = path.join(__dirname, '../../', PATH_DB);
    // if (fs.existsSync(dbPath)) {
    //   fs.unlinkSync(dbPath);
		// }

    await clearData();
		
		let compositionPath = path.join(__dirname, '../../', PATH_MAGISTERS);
    await prepareData(compositionPath);

    compositionPath = path.join(__dirname, '../../', PATH_BACHELORS);
    await prepareData(compositionPath);


    await createMany();

    res.status(200).json({
      path: compositionPath,
    });
  } catch (error) {
    console.log(error);
    res.end();
  }
};
