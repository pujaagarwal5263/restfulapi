const express= require("express");
require("./db/conn");
const Student=require("./models/students");
const studentRouter=require("./routers/student");

const app=express();
const port=process.env.PORT || 3000;

//to recognise incoming json request
//this is what we call middleware
app.use(express.json());
//using express router
app.use(studentRouter);

app.get("/",(req,res)=>{
    res.send("So, your API is running here");
})

//create new students
//using PROMISES

// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user= new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((err)=>{
//         res.status(400).send(err);
//     })
//     //res.send("Hello from the other side");
// })

//using express router
//1: create a new router
//const router= new express.Router();

// //2:define the router
// router.get("/puja",(req,res)=>{
//     res.send("Hello Everyone!");
// })

//3: Register the router
//app.use(router);

// //using ASYNC AWAIT --> better than promises
// app.post("/students",async(req,res)=>{
//     try{
//     const user= new Student(req.body);
//     const createUser= await user.save();
//     res.status(201).send(createUser);
//     }
//     catch(err){
//         res.status(400).send(err); 
//     }
// })

// //read data of registerd users
// app.get("/students",async(req,res)=>{
//     try{
//         const studentsData= await Student.find();
//         res.send(studentsData);
//     }catch(e){
//        res.send(e);
//     }
// })

// //to get data of individual on the basis of name
// app.get("/students/:name",async(req,res)=>{
//   try{
//      const myname=req.params.name;
//      const studentData=await Student.find({name:myname});
//      //use find(_id) for using ID
//      console.log(studentData);

//      if(!studentData){
//          return res.status(404).send();
//      }
//      else{
//      res.send(studentData);
//      }
//   }catch(err){
//       res.status(500).send(err);
//   }
// })

// //update student details on the basis of id
// app.patch("/students/:id", async (req,res)=>{
//     try{
//       const _id = req.params.id;
//       //use findOneAndUpdate({name:_id},req.body) for updating via name
//       const updateStudents = await Student.findByIdAndUpdate(_id,req.body,{
//           new: true
//       });
//       res.send(updateStudents);
//     }catch(err){
//        res.status(404).send(err);
//     }
// })

// //delete students record
// app.delete("/students/:id",async(req,res)=>{
//     try{
//        //const _id=req.params.id;
//        const deleteStudent = await Student.findByIdAndDelete(req.params.id);
//      if(!req.params.id){
//          return res.status(400).send("not found");
//      }
//      res.send(deleteStudent);
//     }catch(err){
//         res.status(500).send(err);
//     }
// })

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`)
});
