const express = require("express")
const app = express();
require("./conn/conn")
const auth = require("./routes/auth")
app.use(express.json())// convert response to json


app.get("/",(req,res)=>{
  res.send("Hello");
})



app.use('/api/v1', auth) //contains api routes

app.listen(4000,()=>{
  console.log("Server Started")
})