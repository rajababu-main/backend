const mongoose =require('mongoose');
const ObjectId=mongoose.Types.ObjectId
const productSchema=new mongoose.Schema({
    productName:{type:String,default:"",require:true},
    brand:{type:ObjectId,default:null},//id
    productUID:{type:String,default:"",require:true},
    productCAtegory:{type:ObjectId,default:null},//id
    seller:{type:ObjectId,default:null},//id
    addedBy:{type:String,default:'admin'},  //either admin or seller if its added by seller then sellerId should be included
    totalUnits:{type:String,default:"",require:true},
    productDetails:{
        productImage:[{type:String,default:"",require:true}],
        expiry:Date,
        productDescriptions:{type:String,default:"",require:true},
    },
    price:{type:Number,default:0,require:true},
    discount:{type:Number,default:0,require:true}, //this will treates as %
    shippingDetails:{type:String,default:"",require:true},
    weight:{type:Number,default:0,require:true},
    dimensions:{type:String,default:"",require:true},
    colors:[{type:String,default:"",require:true}],
    material:{type:ObjectId,default:null,require:true},  
    warranty:{type:String,default:"",require:true},
    refundable:{
        isRefundable:{type:Boolean,default:false},
        refundableWithin:{type:String,default:"",require:true}
    },
    ratings:{type:Number,default:0},
    createdAt:Date,
    updateDate:Date,
    productDeleted:{type:Boolean,default:false},
    productInProgress:{type:Boolean,default:false},
    adminId:{type:ObjectId,default:null}
})

const productCollection=mongoose.model('Products',productSchema);

module.exports=productCollection;