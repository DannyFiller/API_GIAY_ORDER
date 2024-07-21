const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    Email:{
        type : String
    },
    Password:{
        type : String
    },
    UserName:{
        type : String
    },
    Address:{
        type : String
    },
    PhoneNumber:{
        type : Number
    },
    BirthDay:{
        type : Date
    },
    Image:{
        type : String
    },
});

let Account = mongoose.model("Account",accountSchema);
module.exports={Account};
