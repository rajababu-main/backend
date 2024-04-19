const express=require('express')
const router=express.Router();
const userModel=require('./../models/users');
const productModel=require('./../models/products')
const {createProducts}=new productModel();
const {signUp,login,protected}=new userModel();
router.use(express.json());
const authCheck=require('./../auth/auth')
router.post("/users",async (req,res)=>{
    await signUp(req,res)
})

router.post('/user/login',async(req,res)=>{
    await login(req,res)
})

router.post('/admin/product/createProduct',async(req,res)=>{
    await createProducts(req,res)
})
module.exports=router;