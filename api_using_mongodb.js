const express = require('express');
const app = express();

const dbConnect = require('./mongodb');

const mongodb = require('mongodb');

app.use(express.json());

app.get('/',async (req,resp)=>{
    let response = await dbConnect();
    let data = await response.find().toArray();
    resp.send(data);
});

app.post('/',async (req,resp)=>{
    let db = await dbConnect();
    console.log(req.body);
    const resultOne = await db.insertOne(req.body)
    resp.send(resultOne);
});

// Update: Approach 1: changing the value using parameter like http://localhost:5000
// app.put('/',async (req,resp)=>{
//     let db = await dbConnect();
//     console.log(req.body);
//     const updateOne = await db.updateOne(
//             // changing only one field
//             // {name:"u50"},{
//             //     $set:{price:req.body.price}
//             // }
//             // changing the whole object
//             {name:"u50"},{
//                 $set:req.body
//             }
//         );
//     resp.send(updateOne);
// });

// Update: Appoach 2: changing the value using parameter like http://localhost:5000/u50
app.put('/:name',async (req,resp)=>{
    let db = await dbConnect();
    console.log(req.body);
    const updateOne = await db.updateOne(
            
            {name:req.params.name},{
                $set:req.body
            }
        );
    resp.send(updateOne);
});

// Highlight : _id and since it's object type in DB, so we use new mongodb.ObjectId(req.params.id) 
// Also trim is required to get rid of whitespaces
app.delete('/:id',async (req,resp)=>{
    let db = await dbConnect();
    const id = (req.params.id).trim();
    const deleteOne = await db.deleteOne(
        {_id:new mongodb.ObjectId(id)}
        );

    console.log(deleteOne);
    resp.send(deleteOne);
});

app.listen('5000');