const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();

    // const resultSingle = await db.insertOne(
    //     {           
    //         "name": "note 5",
    //         "brand": "vivo",
    //         "price": 320,
    //         "category": "mobile"
    //       }
    //     );
    // if(resultSingle.acknowledged){
    //     console.log("Data Inserted ID : " + resultSingle.insertedId);
    // }


    const resultMany = await db.insertMany(
        [{           
            "name": "note 5",
            "brand": "vivo",
            "price": 320,
            "category": "mobile"
          },
          {           
            "name": "note 5",
            "brand": "vivo",
            "price": 320,
            "category": "mobile"
          },
          {           
            "name": "note 5",
            "brand": "vivo",
            "price": 320,
            "category": "mobile"
          }
        ]
        );
    if(resultMany.acknowledged){
        console.log("Total number of records inserted: " + resultMany.insertedCount)
        console.log(resultMany.insertedIds);
    }
}

insert();