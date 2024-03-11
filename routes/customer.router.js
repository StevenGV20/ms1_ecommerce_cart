const express = require("express");
const CustomerService = require("../services/customer.service");
const validationHandler = require("../middlewares/validation.handler");
const {createCustomerSchema,getCustomerSchema,updateCustomerSchema} = require("../schemas/customer.schema")
const router = express.Router();

const service = new CustomerService();

router.get("/",async (req,res,next)=>{
  try {
    const customers = await service.find();
    res.json(customers)
  } catch (error) {
    next(error);
  }
});

router.get("/:id",
  validationHandler(getCustomerSchema,"params.id"),
  async (req,res,next)=>{
    try {
      const customers = await service.findOne(req.params.id);
      res.json(customers)
    } catch (error) {
      next(error);
    }
});

router.post("/",
  validationHandler(createCustomerSchema,'body'),
  async(req,res,next) => {
    try {
      const customer = await service.create(req.body);
      res.json(customer);
    } catch (error) {
      next(error);
    }
})

router.put("/:id",
  validationHandler(updateCustomerSchema,'params.id'),
  async(req,res,next) => {
    try {
      const customer = await service.update(req.params.id,req.body);
      res.json(customer);
    } catch (error) {
      next(error);
    }
})

router.delete("/:id",validationHandler(getCustomerSchema,"params.id"), async(req,res,next) => {
  try {
    const id = await service.delete(req.params.id);
    res.json(id);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
