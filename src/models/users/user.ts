const { Schema, model } = require('mongoose');
const Joi = require('joi');

import { handleMongoSaveError } from '../../utils';

const regexp = {
  email:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};
const subscriptions = ['starter', 'pro', 'business'];

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, 'Set password for user'],
      minlength: 8,
    },
    email: {
      type: String,
      match: regexp.email,
      required: [true, 'Email is required'],
      unique: true,
    },
    
    token: {
      type: String,
      default: '',
    },
    
  },
  { timestamps: true, versionKey: false }
);

userSchema.post('save', handleMongoSaveError);

const User = model('user', userSchema);

const registerSchema = Joi.object({
  email: Joi.string().pattern(regexp.email).required(),
  password: Joi.string().min(8).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(regexp.email).required(),
  password: Joi.string().min(8).required(),
});


const schemas = {
  registerSchema,
  loginSchema,
  
};

module.exports = {
  User,
  schemas,
};
