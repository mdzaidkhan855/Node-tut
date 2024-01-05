const mongoose = require('mongoose');

// Configuration starts
mongoose.connect('mongodb://0.0.0.0:27017/e-comm'); 
const ProductSch = new mongoose.Schema({
    name:String,
    price: Number,
    brand:String,
    category:String
});
// Configuration ends

const save = async ()=>{      
    const Product = mongoose.model('products',ProductSch);
    const data = new Product({name:"m8",price:200,brand:"max", category:"mobile"});

    const result = await data.save();
    console.log(result);
}
// Uncomment below to run
//save();

const update = async ()=>{
    
    const Product = mongoose.model('products',ProductSch);    
    const data = await Product.updateOne(
        {name:"max pro 5"},
        {
            $set:{name:"max pro 10"}
        }
        )
    console.log(data);
}
// Uncomment below to run
//update();

const del = async() =>{
    const Product = mongoose.model('products',ProductSch);
    let data = await Product.deleteOne(
        {name:"max pro 10"}
        );
    console.log(data);
}
// Uncomment below to run
//del();

const find = async() =>{
    const Product = mongoose.model('products',ProductSch);
    let data = await Product.find();
    console.log(data);
}
// Uncomment below to run
//find();