// const http = require('http');
// const dt = require('./data');

// http.createServer((req,res)=>{
//     res.writeHead(200,{'Content-Type':'application\json'});
//     res.write(JSON.stringify(dt));
//     res.end();
// }).listen(4500);

console.log('cleaned1')

// const fs = require('fs');
// const path = require('path');

// const dirPath = path.join(__dirname, 'files');

// // for(i=0;i<5;i++){

// //     fs.writeFileSync(dirPath + "/hello" + i + ".txt", "kuchh bhi");
// // }

// fs.readdir(dirPath,(err, files)=>{
//     files.forEach((item)=>{
//         console.log("The names of file are :" + item);
//     })
    
// });
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath,'this is simple file1');

// fs.readFile(filePath,'utf8',(err,content)=>{
//     console.log(content);
// })


// fs.appendFile(filePath, 'Some append',(err)=>{
//     if(!err)console.log('File is appended');
// });

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)console.log('File is renamed');
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`);

// console.log('started exec...');

// setTimeout(()=>{
//     console.log('started logic...');
// },3000);

// console.log('finished exec...');

// let a = 10;
// let b = 0;

// setTimeout(()=>{
//     b = 20;
// },3000);

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//        resolve(20);
//     },3000);
// });

// waitingData.then((result)=>{
//     console.log('With Promise ',a + result);
// })

// console.log('without promise',a + b);

// const express = require('express');
// const app = express();
// app.get('',(req,res)=>{
//     res.send('Hello, this is home page');
// });
// app.get('/about',(req,res)=>{
//     res.send('Hello, this is about page');
// });

// const path = require('path');
// const dirPath = path.join(__dirname,'public')

// const filePath = dirPath + "/about.html";

//app.use(express.static(dirPath));

// app.get('',(_,res)=>{
//     res.sendFile(dirPath + '/index.html');
// });

// app.get('/about',(_,res)=>{
//     res.sendFile(dirPath + '/about.html');
// });

// app.get('/home',(_,res)=>{
//     res.sendFile(dirPath + '/home.html');
// });



// Template engine below
// app.set('view engine','ejs');
// app.get('/profile',(_,res)=>{
//     const user={
//         name:"anil",
//         email:"anil@test.com"
//     }
//     res.render('profile',{user});
// });

// app.get('*',(_,res)=>{
//     res.sendFile(dirPath + '/404.html');
// });
// End of template


// Routing starts
const express = require('express');
const app = express();

const reqFilter = require('./middleware');

const route = express.Router();
route.use(reqFilter);

// -----------------
// const reqFilter = (req,res,next)=>{
//     if(!req.query.age){
//         res.send('Please provide age');
//     }else if(req.query.age < 18 ){
//         res.send('under age');
//     }
//     else{
//         next();
//     }
    
// }
//app.use(reqFilter);
// -------------------



app.get('/',(req,res)=>{
    res.send('Welcome Home Page');
});

app.get('/about',(req,res)=>{
    res.send('Welcome to about page');
});

// app.get('/users',reqFilter,(req,res)=>{
//     res.send('Welcome to users page');
// });

// app.get('/contact',reqFilter, (req,res)=>{
//     res.send('Welcome to contact page');
// });

route.get('/users',(req,res)=>{
    res.send('Welcome to users page');
});

route.get('/contact', (req,res)=>{
    res.send('Welcome to contact page');
});

app.use('/',route);
app.listen(4500);