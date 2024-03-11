const express = require('express');

const router = express.Router();

const authController = require('../../controllers/auth');

const { validateReqBody, upload } = require('../../middlewares');

const {authenticate} = require('../../middlewares/authenticate.js');

const { schemas } = require('../../models/users/user');

const { controllersWrapper } = require('../../utils');

router.post(
  '/register',
  validateReqBody(schemas.registerSchema),
  controllersWrapper(authController.register)
);

router.post(
  '/login',
  validateReqBody(schemas.loginSchema),
  controllersWrapper(authController.login)
);

console.log(authenticate);

router.get(
  '/current',
  authenticate,
  controllersWrapper(authController.checkCurrent)
);

router.get('/logout', authenticate, controllersWrapper(authController.logout));


export default router;
