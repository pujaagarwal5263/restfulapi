const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/students-api",
{useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(()=>{
    console.log("Connection is successful");
}).catch((err)=>{
    console.log("No Connection");
})

