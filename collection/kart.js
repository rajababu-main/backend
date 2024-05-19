const mongoose =require('mongoose');
const ObjectId=mongoose.Types.ObjectId
const kartSchema=new mongoose.Schema({
   user:{},
   kartList:[{productId:{type:ObjectId,require:true},qty:{type:Number,default:1}}],
   date:Date
})

const kartCollection=mongoose.model('Kart',kartSchema);

module.exports=kartCollection;