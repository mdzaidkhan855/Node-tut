const dbConnect = require('./mongodb');


dbConnect().then((resp)=>{
    resp.find().toArray().then((data)=>{
        console.log(data);
    })
})

const main = async ()=>{
    let response = await dbConnect();
    let data = await response.find().toArray();
    console.log(data);
};

main();