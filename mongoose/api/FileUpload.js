const express = require('express');
const multer = require('multer');

const app = express();

app.listen('5000');

const upload = multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb) {
            cb(null,"mongoose/api/file")
        },
        filename:function(req,file,cb){
            //cb(null,file.fieldname +"_"+Date.now(),"jpg");    
            cb(null,file.fieldname+"_"+Date.now() + ".pdf"); 
        }
    })
}).single("user_file");

app.post('/upload',upload, (req,resp)=>{
    resp.send('upload')
})