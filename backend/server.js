const express=require("express");
const app=express();
app.use(express.json());

const cors=require("cors");
app.use(cors());

app.listen("5000",function(){
    console.log("Server running on PORT:5000");
})














































