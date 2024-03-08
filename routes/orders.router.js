const express = require("express");
const OrderService = require("./../services/order.service")

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

router.get("/:id",async (req,res)=>{
  const {id} = req.params;
  const order = await service.findOne(id)
  res.json(order)
})

module.exports = router;
