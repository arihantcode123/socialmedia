const {Schema,model}=require('mongoose');

const formSchema= new Schema({
    name:{
        type:String,
        required:true
    },
    socialmedia:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        requried:true
    }
})



const Userform=new model('Upload',formSchema);

module.exports=Userform;