const express=require('express')
const router=express.Router();
const userModel=require('./../models/users');
const productModel=require('./../models/products');
const miscModel=require('./../models/misc')
const {createProducts}=new productModel();
const {signUp,login,protected}=new userModel();
const {createBrand,createCategoty,createTags,getBrands,getCategories,createProductType}=new miscModel();
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


//============================================MISC==================================
router.post('/admin/createBrand',async(req,res)=>{
    await createBrand(req,res)
})
router.post('/admin/createCategories',async(req,res)=>{
    await createCategoty(req,res)
})
router.post('/admin/createTags',async(req,res)=>{
    await createTags(req,res)
})
router.get('/admin/createTypes',async(req,res)=>{
    await createProductType(req,res)
})
router.get('/admin/getBrands',async(req,res)=>{
     await getBrands(req,res)
})
router.get('/admin/getCategories',async(req,res)=>{
    await getCategories(req,res)
})
//createProductType

//----------------------------------------user--------------------------------------
//kart

module.exports=router;