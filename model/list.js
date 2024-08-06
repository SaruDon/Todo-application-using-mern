const mongoose = require("mongoose")

const listSchema = mongoose.Schema({
  title : {
    type: String,
    required:true,
  },
  body :{
    type: String,
    required:true
    },
    user :[
      {
        type: mongoose.Types.ObjectId,
        ref:"User",
      }
    ],
},
{timestamp: true}
);

module.exports = mongoose.model("List",listSchema)  // export the module