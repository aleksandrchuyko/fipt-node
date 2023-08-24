import express from 'express';
import * as filesController from '../../controllers/files';

const router = express.Router();

import { controllersWrapper } from '../../utils';
import { upload } from 'middlewares';

router.post(
  '/magisters',
  upload.single('magisters'),
  controllersWrapper(filesController.uploadMagisters)
);

router.post(
  '/bachelors',
  upload.single('bachelors'),
  controllersWrapper(filesController.uploadBachelors)
);

export default router;
