const mongoose = require("mongoose")

const conn = async (req, res) =>{
  // await mongoose.connect("mongodb://localhost:27017/todo")
  // .then(()=>{
  //   console.log("Connction Done")
  // })
  try{
    await mongoose
    .connect(
      "mongodb://localhost:27017/todo"
    )
    .then(() =>{
      console.log("Connected")
    })
  }catch(error){
    res.status(400).json({
      message:"Not connected",
    })
  }
}

conn();