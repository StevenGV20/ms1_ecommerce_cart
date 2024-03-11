const express = require("express");
const OrderService = require("./../services/order.service")
const {createOrderSchema,getOrderSchema,updateOrderSchema,addOrderItemSchema} = require("./../schemas/order.schema");

const validationHandler = require("./../middlewares/validation.handler")
const router = express.Router();

const service = new OrderService();

router.get("/",async (req,res,next)=>{
  try {
    const orders = await service.find();
    res.json(orders)
  } catch (error) {
    next(error);
  }
});

router.get("/:id",
  validationHandler(getOrderSchema,'params.id'),
  async (req,res)=>{
    const {id} = req.params;
    const order = await service.findOne(id)
    res.json(order)
});

router.post("/",
  validationHandler(createOrderSchema,'body'),
  async(req,res,next) => {
    try {
      const order = await service.create(req.body);
      res.json(order);
    } catch (error) {
      next(error);
    }
})

router.post("/add-item",
  validationHandler(addOrderItemSchema,'body'),
  async(req,res,next) => {
    try {
      const newItem = await service.addItem(req.body);
      res.json(newItem);
    } catch (error) {
      next(error);
    }
})

router.post("/add-all-items",
  async(req,res,next) => {
    try {
      const items = await service.addAllitems(req.body);
      res.json(items);
    } catch (error) {
      next(error);
    }
});

router.put("/:id",
  validationHandler(updateOrderSchema,'body'),
  async(req,res,next) => {
    try {
      const order = await service.update(req.params.id,req.body);
      res.json(order);
    } catch (error) {
      next(error);
    }
})

router.delete("/:id", validationHandler(getOrderSchema,'params.id'), async(req,res,next) => {
  try {
    const id = await service.delete(req.params.id);
    res.json(id);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
