const Userform = require('../model/user-form-model')


const adminController=async(req,res)=>{
    try{
        const userData = await Userform.find({},{_id:0})
        console.log(userData)
        if(userData)return res.send(userData)
    }catch(error){
        console.log(error);      
    }
}

module.exports=adminController