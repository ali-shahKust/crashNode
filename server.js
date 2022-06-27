const http = require('http');
const fs = require('fs');
const lod = require('lodash');
const server = http.createServer((req, res) => {


   const num= lod.random(0,999);
    console.log(num);

    res.setHeader('Content-Type','text/html');

    var greeting = lod.once(()=>{
        console.log("Hello function");
    });

    greeting();
    greeting();
    let path = './views/';
    if(req.url == "/"){
        req.statusCode = 200;
        path += "index.html";
    }else if(req.url == "/about"){
        
        req.statusCode = 200;
        path += "about.html";
    }
    else if(req.url == "/about-us"){
        res.statusCode = 301;
        res.setHeader('Location', '/about');
    }
    else {
        path += "404.html";
        req.statusCode = 404;
    }
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            res.end(data);
        }

    });
    // res.write(JSON.stringify({'data':[{'name':'ali'},{'name':"Ahmar"}]}));
    // res.end();
        
});
server.listen(3000,'localhost',()=>{
    console.log("Listening to localhost at 3000 port");
});