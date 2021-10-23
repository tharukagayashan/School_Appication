const router = require("express").Router();
const student = require("../models/Student");

//Save Student
router.route("/insert").post((req,res)=>{

    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const age = req.body.age;
    const address = req.body.address;
    const telephone = req.body.telephone;
    const email = req.body.email;
    

    const newStudent = new student({
        firstname,lastname,age,address,telephone,email    
    })

    newStudent.save().then(()=>{
        res.json("Student added successfully.");
    }).catch((err)=>{
        console.log(err);
    });

})

module.exports = router;