const router = require("express").Router();
const User = require("../model/user")

router.post("/register",async(req,res)=>{
  try{
    const {email,username,password} = req.body; //take input form user in json 
    console.log("user inpur taken")
    const user = new User({email,username,password})
    console.log("new user created")
    await user.save().then(() => {
      res.status(200).json({user:user});
    })
  }catch(error){
    console.error(error);
    res.status(400).json({messsage: "user already present"})
  }
})  


module.exports = router;
