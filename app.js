const express = require('express');

const app = express();

app.set('view engine', 'ejs');
    app.listen(3000);
//fetching HTML Pages
    app.get('/',(req,res)=>{
    res.render('index',{title:'Home'}); 
    });

    app.get('/about',(req,res)=>{
        res.render('about',{title:"About"});
        });
        app.get('/create',(req,res)=>{
            res.render('create',{title:"New Blog"});
        });
    //404 page not found 
    //Must be at the end of the code
    app.use((req,res)=>{    
        res.status(404).render('404',{title:"Not Found"});  
    })