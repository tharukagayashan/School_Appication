const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8000;
const URL = process.env.URL;

mongoose.connect(URL,{
    useNewURLParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("MongoDB Connected");
}).catch((err)=>{
    console.log(err);
})

const student = require("./routes/students.js");

app.use("/student",student);

app.listen(PORT,(()=> {
    console.log(`App Running on PORT ${PORT}`);
}));