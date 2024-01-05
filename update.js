const dbConnect = require('./mongodb');

const update = async ()=>{
    const db = await dbConnect();

    const updateOne = await db.updateOne(
        {name:"note 5"},{
            $set:{name:"max pro 5"}
        }
        );

    console.log(updateOne);
}

update();