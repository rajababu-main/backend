const mongoose =require('mongoose');
const userSchema=new mongoose.Schema({
    fullName:{type:String,default:"",require:true},
    mobile:{type:String,default:"",require:true},
    email:{type:String,default:""},
    password:{type:String,default:"",require:true},
    createdAt:Date,
    updatedAt:Date,
})

const userCollection=mongoose.model('User',userSchema);

module.exports=userCollection;