const express = require("express");
const UserService = require("../services/user.service")

const router = express.Router();

const service = new UserService();

router.get("/",async (req,res,next)=>{
  try {
    const users = await service.find();
    res.json(users)
  } catch (error) {
    next(error);
  }
});

router.get("/:id",async (req,res,next)=>{
  try {
    const users = await service.findOne(req.params.id);
    res.json(users)
  } catch (error) {
    next(error);
  }
});

router.post("/", async(req,res,next) => {
  try {
    const user = await service.create(req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
})

router.put("/:id", async(req,res,next) => {
  try {
    const user = await service.update(req.params.id,req.body);
    res.json(user);
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

module.exports = router;
