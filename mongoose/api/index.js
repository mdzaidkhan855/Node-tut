const express = require('express');
require('./config');
const Products = require('./product');

const app = express();
app.use(express.json());

const mongodb = require('mongodb');

app.post('/create', async(req,resp)=>{

    let data = new Products(req.body);
    let result = await data.save();
    resp.send(result);
});

app.get('/list',async (req,resp)=>{
    let data = await Products.find();
    resp.send(data);
});

// Delete Approach 1
// app.delete('/delete/:id',async (req,resp)=>{
//     let data = await Products.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
//     resp.send(data);
// });
// Delete Approach 2
app.delete('/delete/:_id',async (req,resp)=>{
    let data = await Products.deleteOne(req.params);
    resp.send(data);
});

app.put('/update/:_id',async (req,resp)=>{
    let data = await Products.updateOne(
        //{_id:req.params},
        req.params,
        { $set:req.body}
    );
    resp.send(data);
});

app.listen('5000');