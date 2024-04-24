const mongoose =require('mongoose');
const ObjectId=mongoose.Types.ObjectId
const productResponseSchema=new mongoose.Schema({
    userId:{type:ObjectId,default:null,require:true},
    userName:{type:String,default:"",require:true},
    productName:{type:String,default:"",require:true},
    productId:{type:ObjectId,default:null,require:true},
    responseImages:[{type:String,default:""}],
    comments:[{type:String,default:""}],
    rating:{type:Number,default:0},
    dateAdded:Date
})

const productResponseCollection=mongoose.model('ProductResponse',productResponseSchema);

module.exports=productResponseCollection;