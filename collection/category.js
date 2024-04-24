const mongoose =require('mongoose');
const ObjectId=mongoose.Types.ObjectId
const categorySchema=new mongoose.Schema({
    categoryName:{type:String,default:""},
    createdAt:Date,
    updateDate:Date,
    adminId:{type:ObjectId,default:null}
})

const categoryCollection=mongoose.model('Categories',categorySchema);

module.exports=categoryCollection;