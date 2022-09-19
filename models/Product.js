const mongoose = require("mongoose");
// cerate a new mongoose schema
const ProductSchema = new mongoose.Schema({
    id:{
        type:Number,
              
    }, 
    Name:{   
        type:String,  
      
    },
    Productquantity:{ 
        Type:Number,
      
    }
  

}) 

const Product = mongoose.model('Product',ProductSchema);

module.exports = Product;