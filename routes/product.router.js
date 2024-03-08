const express = require("express");
const ProductService = require("./../services/product.service")

const router = express.Router();

const service = new ProductService();

router.get("/",async (req,res,next)=>{
  try {
    const products = await service.find();
    res.json(products)
  } catch (error) {
    next(error);
  }
});
/*
router.get("/:id",async (req,res)=>{
  const {id} = req.params;
  const product = await service.findOne(id)
  res.json(product)
}) */

module.exports = router;
