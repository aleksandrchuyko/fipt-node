import express from "express";
import * as studentsController from "../../controllers/students";

const router = express.Router();

import { validateReqBody } from '../../middlewares';

import { schemas } from '../../models/students/student';

import { controllersWrapper } from '../../utils';



router.get("/", controllersWrapper(studentsController.getAll));

router.get("/stats/", controllersWrapper(studentsController.getStatistic));

router.get("/:studentId", controllersWrapper(studentsController.getById));

router.post("/", validateReqBody(schemas.addSchema), controllersWrapper(studentsController.addNew));

router.delete("/:studentId", controllersWrapper(studentsController.removeById));

router.patch("/:studentId", validateReqBody(schemas.addSchema), controllersWrapper(studentsController.updateById));

router.post("/set", controllersWrapper(studentsController.setMockCollection));


module.exports = router;
