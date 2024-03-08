const Joi  =require("joi");

const orderId = Joi.string().uuid();
const status = Joi.string().min(3).max(20);
//const createdAt = Joi.date();
const customerId = Joi.number().integer();

const createOrderSchema = Joi.object({
  customerId : customerId.required(),
  status: status.required(),
  //createdAt: createdAt.required()
});

const updateOrderSchema = Joi.object({
  customerId,
  status,
  //createdAt
});

const getOrderSchema = Joi.object({
  orderId : orderId.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };
