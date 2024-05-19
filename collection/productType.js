//ProdType
const mongoose =require('mongoose');
const ObjectId=mongoose.Types.ObjectId
const prodTypeSchema=new mongoose.Schema({
    prodType:{type:String,require:true},
    createdAt:Date,
    updateDate:Date,
    isRemoved:{type:Boolean,default:false},
    adminId:{type:ObjectId,default:null}
})

const typeCollection=mongoose.model('ProdType',prodTypeSchema);

module.exports=typeCollection;