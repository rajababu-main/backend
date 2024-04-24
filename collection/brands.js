const mongoose =require('mongoose');
const ObjectId=mongoose.Types.ObjectId
const brandSchema=new mongoose.Schema({
    logo:{type:String,default:""},
    brandName:{type:String,default:"",require:true},
    category:{type:ObjectId,default:null,ref:'Categories'},
    createdAt:Date,
    updateDate:Date,
    isRemoved:{type:Boolean,default:false},
    adminId:{type:ObjectId,default:null}
})

const brandCollection=mongoose.model('Brands',brandSchema);

module.exports=brandCollection;