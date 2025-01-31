import Joi from 'joi';
import { FUNDING_CATEGORY_TYPE } from '../utils/constants.js';

export const costAllocationSplitSchema = Joi.object().keys({
  federal: Joi.number().required(),
  state: Joi.alternatives()
    .conditional('federal', {
      switch: [
        {
          is: 90,
          then: Joi.number().valid(10)
        },
        {
          is: 75,
          then: Joi.number().valid(25)
        },
        {
          is: 50,
          then: Joi.number().valid(50)
        }
      ]
    })
    .messages({
      'alternatives.base': 'Select a federal-state split.',
      'alternatives.any': 'Select a federal-state split.'
    }),
  fundingCategory: Joi.any()
});

export const costAllocationMatchRateSchema = costAllocationSplitSchema.keys({
  fundingCategory: Joi.alternatives().conditional('federal', {
    switch: [
      {
        is: 0,
        then: Joi.any()
      },
      {
        is: 90,
        then: Joi.string()
          .trim()
          .valid(FUNDING_CATEGORY_TYPE.DDI)
          .required()
          .messages({
            'string.base': 'Select a valid match rate.',
            'string.empty': 'Select a valid match rate.',
            'any.only': 'Select a valid match rate.'
          }),
        otherwise: Joi.string()
          .trim()
          .valid(FUNDING_CATEGORY_TYPE.DDI, FUNDING_CATEGORY_TYPE.MANDO)
          .required()
          .messages({
            'string.base': 'Select a funding category.',
            'string.empty': 'Select a funding category.',
            'any.only': 'Select a funding category.'
          })
      }
    ]
  })
});

export const costAllocationOtherSchema = Joi.number()
  .positive()
  .allow(0)
  .required()
  .messages({
    'number.base':
      'Provide an other funding amount greater than or equal to $0.',
    'number.positive':
      'Provide an other funding amount greater than or equal to $0.',
    'number.allow':
      'Provide an other funding amount greater than or equal to $0.',
    'number.empty':
      'Provide an other funding amount greater than or equal to $0.',
    'number.format': 'Provide a valid funding amount.',
    'any.required': 'Provide a valid funding amount.'
  });

export const hitechCostAllocationSchema = Joi.object().pattern(
  /\d{4}/,
  Joi.object({
    ffp: costAllocationSplitSchema,
    other: costAllocationOtherSchema
  })
);

export const mmisCostAllocationSchema = Joi.object().pattern(
  /\d{4}/,
  Joi.object({
    ffp: costAllocationMatchRateSchema,
    other: costAllocationOtherSchema
  })
);
