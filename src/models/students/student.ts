const { Schema, model } = require('mongoose');
const Joi = require('joi');

const { handleMongoSaveError } = require('../../utils');

const degree = ['Магістр', 'Бакалавр'];

const studentSchema = new Schema(
  {
    card_id: {
      type: Number,
      required: true,
    },
    applicant: {
      type: String,
      required: true,
    },
    birth_date: {
      type: String,
      required: true,
    },
    start_study: {
      type: String,
      required: true,
    },
    end_study: {
      type: String,
      required: true,
    },
    degree: {
      type: String,
      required: true,
    },
    study_type: {
      type: String,
      required: true,
    },
    grade: {
      type: Number,
    },
  },
  { timestamps: true, versionKey: false }
);

studentSchema.post('save', handleMongoSaveError);

export const Student = model('student', studentSchema);

const addSchema = Joi.object({
  card_id: Joi.number().required(),
  applicant: Joi.string().required(),
  birth_date: Joi.string().required(),
  start_study: Joi.string().required(),
  end_study: Joi.string().required(),
  degree: Joi.string()
    .valid(...degree)
    .required(),
  study_type: Joi.string().required(),
  grade: Joi.number(),
});

export const schemas = {
  addSchema,
};
