const express = require("express")
const app = express();

app.get("/",(req,res)=>{
    res.send({message : "This is get request handler.."})
})

app.put("/",(req,res)=>{
    res.send({message:"This is put request handler"})
})

app.post("/",(req,res)=>{
    res.send({message:"This is post request handler"})
})

app.delete("/",(req,res)=>{
    res.send({message:"This is a delete request handler"})
})

app.listen(3000,()=>{
    console.log("sever running on port 3000....")
})