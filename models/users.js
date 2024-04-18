
const userCollection=require("./../collection/users")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
class users{
    constructor(){

    }

    async signUp(req,res){
        // try{
        let data=req.body;
        console.log(data)
        let user=await userCollection.findOne({mobile:data.mobile});
        if(user){
            res.status(200).json({message:"user already exists"})
        }
        else{
            const hashedPassword = await bcrypt.hash(data.password, 10);
            let user=new userCollection({
                fullName:data.fullName,
                mobile:data.mobile,
                email:data.email,
                password:hashedPassword
            })
            let savedUser=await user.save()
            if(savedUser){
                res.status(200).json({message:"Welcome!",savedUser})
            }
        }
    // }catch(error){
    //     res.status(400).json({error:"error",error})
    // }
    }

    async login(req,res){
        let data=req.body;
        console.log("++++ data",data)
        let users=await userCollection.findOne({$or:[{mobile:data.mobile},{email:data.email},{fullName:data.fullName}]})
        if(users){
            console.log(data)
            const passwordMatch=await bcrypt.compare(data.password,users.password)
            if(passwordMatch){
                let token=jwt.sign({ id:users._id,mobile:users.mobile,email:users.email }, process.env.JWT_SECRET, { expiresIn: '1h' })
                res.status(200).json({message:'login successed',token:token})
            }
            else{
                res.status(422).json({message:"Password is incorrect"})
            }
        }
        else{
            res.status(404).json({message:'user not found'})
        }
    }

    async protected(req,res){
        console.log("user authenticated")
    }
}

module.exports=users;