const kartCollection = require("../collection/kart")

class kart{
    constructor(){
    }


    async addItemTokart(req,res){
        //kart is empty
       try{
        let data=req.body;
        let kart=await this.kart.findOne({user:ObjectId(req.id)})
        if(!kart){
            let kartparam=new kartCollection({
                userId:ObjectId(req.id),
                kartList:[{productId:ObjectId(data.productId),qty:data.qty}],
                data:Date.now().toISOString()
            })
           const x= await kartparam.save()
           if(x){
            res.status(200).json({message:"item saved to kart"})
           }
        }
        else{
            let prodObj={
                productId:ObjectId(data.productId),
                qty:data.qty
            }
            let kartAdd=await (kartCollection.findOneAndUpdate({_id:ObjectId(kart._id)},{$push:{kartList:prodObj}}))
            if(kartAdd){
                res.status(200).json({message:"item added to kart"})
            }
        }
       }
       catch(error){
        res.status(444).json({message:"kart error"})
       }
    }
    async addQty(req,res){
        const prodId=req.query.id;
        const kartId=req.query.kartId
        let kart=await kartCollection.findOne({_id:ObjectId(kartId)})
    }
    async removeQty(req,res){

    }
    async deleteProduct(req,res){

    }
}



module.exports=kart