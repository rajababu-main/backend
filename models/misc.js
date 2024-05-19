
const brandCollection=require("./../collection/brands");
const categoryCollection=require('./../collection/category')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose=require('mongoose');
const ObjectId=mongoose.Types.ObjectId;
class miscs{
    constructor(){

    }

    async createBrand(req,res){
        // try{
            let data=req.body
            let params=new brandCollection({
                brandName:data.brandName,
                brandLogo:data.brandLogo,
                category:new ObjectId(data.category)
            })
            let d=await params.save()
          
            if(d){
                res.status(200).json({message:'brand created',d})
            }
        // }
        // catch(error){
        //     res.status(444).json({message:'JSON error'})
        // }
    }

    async createCategoty(req,res){
        // try{
            let params=new categoryCollection({
                categoryName:req.body.categoryName
            })
            let d=await params.save()
            if(d){
                res.status(200).json({message:'category created',d})
            }
        // }
        // catch(error){
        //     res.status(444).json({message:'JSON error'})
        // }
    }

    async createTags(req,res){

    }

    async getBrands(req,res){
        try {
            // Fetch all brands
            const brands = await brandCollection.find({});
        
            // Send response with the fetched brands
            res.json(brands);
          } catch (error) {
            // Handle errors
            console.error('Error fetching brands:', error);
            res.status(500).json({ error: 'Internal server error' });
          }
    }
    async getCategories(req,res){
        try {
            // Fetch all brands
            const cat = await categoryCollection.find({});
        
            // Send response with the fetched brands
            res.json(cat);
          } catch (error) {
            // Handle errors
            console.error('Error fetching brands:', error);
            res.status(500).json({ error: 'Internal server error' });
          }
    }
}

module.exports=miscs;