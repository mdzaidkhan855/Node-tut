const {MongoClient} = require('mongodb');
const url = 'mongodb://0.0.0.0:27017';
const database = 'e-comm';

const client = new MongoClient(url);

// async function getData(){
//     // let result = await client.connect();
//     // let db = result.db(database);
//     // let collection = db.collection('products');
//     let collection = await dbConnect();
//     let response = await collection.find({}).toArray();
//     console.log(response);
//     //console.log("in mongoclient ###### :" + response);
//    //return await collection.find().toArray();
//     return response;
// };

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return  db.collection('products');
   
};


//getData();

module.exports = dbConnect;