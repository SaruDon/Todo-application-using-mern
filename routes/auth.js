const router = require("express").Router();
const User = require("../model/user")
const bcrypt = require("bcryptjs")


router.post("/register",async(req,res)=>{
  try{
    const {email,username,password} = req.body; //take input form user in json 
    console.log("user input taken")

    const hashPassword = bcrypt.hashSync(password)
    console.log("password hashed")

    const user = new User({email,username,password:hashPassword})
    console.log("new user created")
    await user.save().then(() => { //user saved
      res.status(200).json({user:user});
    })
  }catch(error){
    console.error(error);
    res.status(400).json({messsage: "user already present"})
  }
})  


module.exports = router;
