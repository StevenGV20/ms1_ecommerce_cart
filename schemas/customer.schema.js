const Joi  =require("joi");

const id = Joi.number().integer();
const name = Joi.string().min(3).max(100);

const createCustomerSchema = Joi.object({
  customerId : id.required(),
  customerName: name.required(),
});

const updateCustomerSchema = Joi.object({
  customerId : id.required(),
  customerName: name.required(),
});

const getCustomerSchema = Joi.object({
  customerId : id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema };
