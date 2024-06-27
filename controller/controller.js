const { json } = require("express")
const myUserModel=require("../model/model")
exports.createUser=async(req,res)=>{
    try {
      const {studentName,age,address,gender,phoneNumber,state}=req.body
         const data={
            studentName:studentName.trim(),
            age,
            address,
            gender,
            phoneNumber,
            state
         }
         const newUser=await myUserModel.create(data)
         res.status(201).json({message:'new user successful created',data:newUser})
    } catch (error) {
        res.status(500).json(error.message)
    }
}
exports.getoneuser = async (req,res)=>{
    try {
        let id = req.params.id
        const oneUser = await myUserModel.findById(id)
        res.status(200).json({message:`found user by ${id}`, oneUser})
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}
exports.updateuser = async (req,res)=>{
    try {
        let id = req.params.id
        const {studentName, address}=req.body
        const data = {studentName, address} 
        const update = await myUserModel.findByIdAndUpdate(id,data, {new:true}) 
        res.status(200).json({message:"updated successfully", update})
        
    } catch (error) {
        res.status(500).json(error.message)
        
    }
}