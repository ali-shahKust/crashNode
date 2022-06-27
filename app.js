const express = require('express');

const app = express();

    app.listen(3000);
//fetching HTML Pages
    app.get('/',(req,res)=>{
    res.sendFile('./views/index.html',{root:__dirname});
    });

    app.get('/about',(req,res)=>{
        res.sendFile('./views/about.html',{root:__dirname});
        });

    app.get('/about-us',(req,res)=>{
            res.redirect('/about');
            });

    //404 page not found 
    //Must be at the end of the code
    app.use((req,res)=>{    
        res.status(404).sendFile('./views/404.html',{root:__dirname});  
    })