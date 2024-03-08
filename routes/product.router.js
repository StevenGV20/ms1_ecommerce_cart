const express = require("express");
const ProductService = require("./../services/product.service")

const router = express.Router();

const service = new ProductService();

router.get("/",async (req,res,next)=>{
  try {
    const products = await service.find(req.query);
    res.json(products)
  } catch (error) {
    next(error);
  }
});

router.get("/:id",async (req,res,next)=>{
  try {
    const products = await service.findOne(req.params.id);
    res.json(products)
  } catch (error) {
    next(error);
  }
});

router.post("/", async(req,res,next) => {
  try {
    const product = await service.create(req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
})

router.put("/:id", async(req,res,next) => {
  try {
    const product = await service.update(req.params.id,req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
})

router.delete("/:id", async(req,res,next) => {
  try {
    const id = await service.delete(req.params.id);
    res.json(id);
  } catch (error) {
    next(error);
  }
})
/*
router.get("/:id",async (req,res)=>{
  const {id} = req.params;
  const product = await service.findOne(id)
  res.json(product)
}) */

module.exports = router;
