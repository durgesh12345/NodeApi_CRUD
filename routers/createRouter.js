const crouter = require("express").Router();

crouter.post('product/createProductss',(req,res)=>{
    Contact.create({
        Name: req.body.Name,
       id: req.body.id,
       quantity: req.body.quantity,
    },function(err,contact){
        if(err){
            console.log('eerror creating contact');
            return ;    
    }
   
   
    console.log("UserName:"+req.body.Name);
    console.log("UserId:"+req.body.id);
    console.log("quantity:" +req.body.quantity);
    }
    
    )
})

module.exports = crouter;