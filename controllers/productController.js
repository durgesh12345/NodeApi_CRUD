module.exports.create = function (req, res){
  return res.render('create', {
    title:"create new project"
  })
}

// create a new product
const Product  =require("../models/Product");
console.log(Product);
exports.createProduct  = async (req,res) =>{
   try{
    const product = await Product.findOne({ Name:req.body.Name});
    
    console.log(product)
    if(product){
      return res.status(400).json({ message: "Product already exists"});
    }
    await Product.create( req.body);
    return res.status(200).json({ message: "Product created"});
   }catch(error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal errornot found"});
   }
};

// get allproduct from ProductSchema  Objects
exports.getProduct = async (req, res)=> {
   try{
    const product = await Product.find();
      if (product.length == 0){
        return res.status(400).json({ message: "Product not found"});
      }
      return res.status(200).json({ product: product }); 
    
   }catch(e){
    return res.status(400).json({ message: "Product not found"});
   }  
  };

// update product using product id
  exports.updateProduct = async (req, res)=> {
    try{
    const productID = req.params.id;
    const {Name} = req.body;
    const productUpdated = await Product.findByIdAndUpdate(productID,{
      Name: Name
    });
    if(!productUpdated){
      return res.status(400).json({ message: "Product not Updated"}); 
    }
    return res.status(200).json({ message: "Product updated"});

  
    }catch(e){
return res.status(400).json({ message: "Product not Updated Some Error"});
    }
  }

  // DeleteProduct using product ids
  exports.deleteProduct = async (req, res)=>{
   try{
     const productId = req.params.id;
     const DeleteProduct = await Product.findByIdAndDelete(productId);
     if(!DeleteProduct){
      return res.status(400).json({ message: "Product not Found" });
     }
     return res.status(200).json({ message: "Product Delete Successful"});
   }catch(e){}
return res.status(400).json({ message: "Product not Found Some error" });
  }