const mongoose = require("mongoose");
const validator= require("validator");

const studentSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
       minlength: 3
   },
   email:{
       type: String,
        required: true,
        unique:[true,"Email ID already exists"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("INVALID EMAIL");
            }
        }
   },
   phone:{
       type: Number,
       minlength:10,
       maxlength:10,
       required: true,
       unique: true
   },
   address:{
       type: String,
       required: true
   }  
})

//create a new collection
const Student= new mongoose.model('Student',studentSchema);

module.exports=Student;
