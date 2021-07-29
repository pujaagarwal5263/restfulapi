const express=require("express");
const router=new express.Router();
const Student=require("../models/students");

//2:define the router
// router.get("/puja",(req,res)=>{
//     res.send("Hello Everyone!");
// })

//using ASYNC AWAIT --> better than promises
router.post("/students",async(req,res)=>{
    try{
    const user= new Student(req.body);
    const createUser= await user.save();
    res.status(201).send(createUser);
    }
    catch(err){
        res.status(400).send(err); 
    }
})

//read data of registerd users
router.get("/students",async(req,res)=>{
    try{
        const studentsData= await Student.find();
        res.send(studentsData);
    }catch(e){
       res.send(e);
    }
})

//to get data of individual on the basis of name
router.get("/students/:name",async(req,res)=>{
  try{
     const myname=req.params.name;
     const studentData=await Student.find({name:myname});
     //use find(_id) for using ID
     console.log(studentData);

     if(!studentData){
         return res.status(404).send();
     }
     else{
     res.send(studentData);
     }
  }catch(err){
      res.status(500).send(err);
  }
})

//update student details on the basis of id
router.patch("/students/:id", async (req,res)=>{
    try{
      const _id = req.params.id;
      //use findOneAndUpdate({name:_id},req.body) for updating via name
      const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{
          new: true
      });
      res.send(updateStudents);
    }catch(err){
       res.status(404).send(err);
    }
})

//delete students record
router.delete("/students/:id",async(req,res)=>{
    try{
       //const _id=req.params.id;
       const deleteStudent = await Student.findByIdAndDelete(req.params.id);
     if(!req.params.id){
         return res.status(400).send("not found");
     }
     res.send(deleteStudent);
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports=router;