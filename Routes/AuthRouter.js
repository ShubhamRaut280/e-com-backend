const express = require('express');
const router = express.Router();

const userid = "shubham"
const password = "123"

router.post("/",(req, res, next)=>{  
    res.status(200).json({
        msg: "server running"
    })
});

router.get("/signin/",(req, res, next)=>{
    let Email = req.query.email
    let Pass = req.query.pass

    if(Email===userid && Pass===password){
         res.status(200).json({
            status : true,
            msg: "Logged in successful."
        })
    }else{
         res.status(200).json({
            status : false,
            msg: "Invalid credentials."
        })
    }   
});


module.exports = router;