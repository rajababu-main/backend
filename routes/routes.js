const express=require('express')
const router=express.Router();
const userModel=require('./../models/users')
const {signUp,login,protected}=new userModel();
router.use(express.json());
const authCheck=require('./../auth/auth')
router.post("/users",async (req,res)=>{
    await signUp(req,res)
})

router.post('/user/login',async(req,res)=>{
    await login(req,res)
})
module.exports=router;