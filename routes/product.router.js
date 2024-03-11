const express = require("express");
const ProductService = require("./../services/product.service")

const router = express.Router();

const service = new ProductService();
const {createProductSchema,getByIdProductSchema,getProductSchema,updateProductSchema} = require("./../schemas/product.schema");

const validationHandler = require("./../middlewares/validation.handler");
const { errorRequestParams } = require("../middlewares/error.handler");
const boom = require("@hapi/boom");

router.get("/",validationHandler(getProductSchema,"query"),async (req,res,next)=>{
  try {
    const products = await service.find(req.query);
    res.json(products)
  } catch (error) {
    next(error);
  }
});

router.get("/:id",validationHandler(getByIdProductSchema,"params.id"),async (req,res,next)=>{
  try {
    const products = await service.findOne(req.params.id);
    res.json(products)
  } catch (error) {
    next(error);
  }
});

router.post("/",validationHandler(createProductSchema,"body"), async(req,res,next) => {
  try {
    const product = await service.create(req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.put("/:id",validationHandler(updateProductSchema,"params.id"), async(req,res,next) => {
  try {
    const product = await service.update(req.params.id,req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id",validationHandler(getByIdProductSchema,"params.id"), async(req,res,next) => {
  try {
    const id = await service.delete(req.params.id);
    res.json(id);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
