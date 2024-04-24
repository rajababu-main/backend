const mongoose =require('mongoose');
const ObjectId=mongoose.Types.ObjectId
const tagSchema=new mongoose.Schema({
    tagName:{type:String,default:""}, 
    createdAt:Date,
    updateDate:Date,
    productDeleted:{type:Boolean,default:false},
    productInProgress:{type:Boolean,default:false},
    adminId:{type:ObjectId,default:null}
})

const productCollection=mongoose.model('Products',tagSchema);

module.exports=productCollection; 