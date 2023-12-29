const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/interest",(req,res)=>{
    const {principal,rate,time} = req.query;
    let si = ((parseInt(principal) * parseInt(rate) * parseInt(time))/100);
    res.json(si);
});


app.listen(3000);
