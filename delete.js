const dbConnect = require('./mongodb');

const del = async ()=>{
    const db = await dbConnect();

    const deleteOne = await db.deleteMany(
        {name:"note 5"}
        );

    console.log(deleteOne);
}

del();