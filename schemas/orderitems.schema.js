const Joi  =require("joi");

const id = Joi.number().integer();
const orderId = Joi.number().integer();
const productId = Joi.number().integer();
const quantity = Joi.number().integer();
const amount = Joi.number();

const createOrderItemSchema = Joi.object({
  orderId: productId.required(),
  productId : productId.required(),
  //createdAt: createdAt.required()
});

const updateOrderSchema = Joi.object({
  orderId: orderId.required(),
  productId : productId.required(),
  quantity : quantity.required(),
  amount: amount.required()
});

const getOrderSchema = Joi.object({
  id : id.required(),
});

module.exports = { createOrderSchema, updateOrderSchema, getOrderSchema };
