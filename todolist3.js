const express=require('express');
const mongoose=require('./config/mongoose');
const todoData=require('./models/contactschema');
const path=require('path');
const port=8082;
const app=express();
app.use(express.urlencoded());
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',function(req,res){
    res.send("I'm in contact list home page");
});
app.get('/contact',(req,res)=>{
    todoData.find({},(err,tasks)=>{
        res.render('contact',{todo:tasks});
    });
   
});
app.post('/add-task',function(req,res){
    const tddata=new Promise((resolve,reject)=>{
        todoData.create({
            description:req.body.description,
            category:req.body.category,
            date:req.body.date,
        });
    }).then(newData=>{
        console.log("*********new data***********");
        resolve(newData);
    }).catch(err=>{
        console.log("error in add data",err);
        reject(err);
    });
    tddata.then((newData)=>{
        res.redirect('contact');
    }).catch((err)=>{
        console.log("error",err);
    });
    // res.redirect('contact');
});
app.listen(port,function(err){
    if(err){
    console.log("error");
    return;
    }
    else
    console.log("server is up and running on:",+port);
});

