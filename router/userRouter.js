const {createUser, getoneuser, updateuser}=require("../controller/controller")
const validator = require('../controller/validator')
const router=require("express").Router()
router.post("/newuser",validator,createUser)
router.get("/getoneuser/:id", getoneuser )
router.put("/update/:id",validator,updateuser)
module.exports=router