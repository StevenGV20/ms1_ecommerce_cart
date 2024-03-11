const Joi  =require("joi");

const id = Joi.number().integer();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const createProductSchema = Joi.object({
  productId : id.required(),
  productName: name.required(),
});

const updateProductSchema = Joi.object({
  productId : id.required()
});

const getByIdProductSchema = Joi.object({
  productId : id.required(),
  limit,
  offset
});

const getProductSchema = Joi.object({
  limit,
  offset
});

module.exports = { getByIdProductSchema, createProductSchema, updateProductSchema, getProductSchema };
