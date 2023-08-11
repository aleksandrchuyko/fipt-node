import express from 'express';
import * as filesController from '../../controllers/files';

const router = express.Router();

import { controllersWrapper } from '../../utils';
import { upload } from 'middlewares';

router.post(
  '/students',
  upload.single('students'),
  controllersWrapper(filesController.uploadCSV)
);

export default router;
