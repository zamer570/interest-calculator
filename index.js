const express = require("express");

const app = express();

app.get("/interest",(req,res)=>{
    const {principal,rate,time} = req.query;
    let si = ((parseInt(principal) * parseInt(rate) * parseInt(time))/100);
    res.json(si);
})

app.listen(3000,()=>{
    console.log("app is listening on port 3000");
})