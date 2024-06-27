const mongoose=require("mongoose");
const date=new Date()

const userSchema=new mongoose.Schema({
    studentName:{
        type:String,
        required:[true,'studentName cannot be empty']
    },
  
    address:{
        type:String,
        required:[true,'address can not be left empty']},
    phoneNumber:{
        type:Number,
        require:[true,'phoneNumber can not be left empty']
    },
    age:{
        type:Number
        
    },
    gender:{
        type:String,
        require:true,
        enum:true["male","female"]

    },
    state:{
        type:String,
        
        
        required:[true,'kindly select a user name']}
},{timestamps:true});
const myUserModel=mongoose.model("firstloginApi",userSchema)

module.exports=myUserModel