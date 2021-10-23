const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Student = new Schema({

    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    telephone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const st = mongoose.model("Student",Student);
module.exports = st;