const Joi  =require("joi");

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  product_id : id.required(),
  product_name: name.required(),
});

const updateProductSchema = Joi.object({
  product_id : id.required(),
  product_name: name.required(),
});

const getProductSchema = Joi.object({
  product_id : id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
