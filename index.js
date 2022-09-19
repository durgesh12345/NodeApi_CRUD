const express = require('express');
const app = express();
const port = 8000;
const path = require('path')
var bodyParser = require('body-parser');
const db = require('./config/mongoose');
let Contact = require('./models/Product'); 
let bodyparser = require('body-parser');
const { response } = require('express');
const notifier = require('node-notifier');
const { name } = require('ejs');
const productRouter = require('./routers/ProductRouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyparser.json()); 
app.use('/product',productRouter);



app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname+ '/assets'));


app.set('views','./views'); 
app.set('view engine','ejs'); 

// Create Product Store and Application
app.post('/products/create',(req,res)=>{
    Contact.create({
        Name: req.body.Name,
       id: req.body.id,
       Productquantity: req.body.Productquantity
    },function(err,newcontact){
        if(err){
            console.log('error creating contact');
            return ; }
           
    return res.redirect('back');
    })
})

// get the product list Application
app.get('/product', function(req, res){

    Contact.find({},function(err,contact){
        if(err){
        console.log("error")
        return ; 
        }   
  return res.render('read',{
    ContactList:contact
  })
    })
})

// Creating product and show Application
app.get('/products/create', function(req, res){

    Contact.find({},function(err,contact){
        if(err){
        console.log("error")
        return ; 
        }
  return res.render('create',{
    ContactList:contact
  })
    })
})

// delete product and show Application
app.get('/delete', function(req, res){
    let Name = req.body.Name;
    console.log(Name);
    Contact.findOneAndDelete(Name,function(err){
        if(err){
            console.log("error");
        }
        notifier.notify('Product deleted successfully');

        return res.redirect('back')
    })
})

app.listen(port,function(err) {
 if(err) {
    console.log("Error listening");
 } 

console.log("Starting with port " + port);
}
    );