const express = require('express');

const jwt = require('jsonwebtoken');
const app = express();
const secretkey = "secretkey";
app.get('/',async (req,resp)=>{
    resp.json({
        message:"A simple jwt token"
    })
});

app.post('/login', async(req,resp)=>{

    const user={
        name:"mursheed",
        email:"abc@test.com"
    }

    jwt.sign({user},secretkey, {expiresIn:'300s'},(err,token)=>{
            resp.json({token});
    });
});

app.post('/profile',verifyToken, (req,resp)=>{
    jwt.verify(req.token,secretkey,(err,authData)=>{
        if(err){
            resp.send({result:"invalid token"});
        }else{
            resp.json({
                message:"profile accessed",
                authData:authData
            })
        }
    })
    //resp.send("profile called");
});

function verifyToken(req,resp,next){
    const bearerHeader = req.headers['authorization'];
    console.log("bearerHeader:" + bearerHeader);
    if(typeof bearerHeader !== undefined){
        const bearer = bearerHeader.split(" ");
        const token = bearer[1];
        req.token = token;
        next();
    }else{
        resp.send({
            result:'Token is not valid'
        })
    }
} 

app.listen('5000');