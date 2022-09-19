const express = require("express");
const {createProduct,getProduct,updateProduct,deleteProduct} = require("../controllers/productController");
const router = express.Router();

router.post("/createProductss", createProduct);
router.get("/getProductss",getProduct);

router.put("/updateProducts/:id", updateProduct);
router.delete("/deleteProduct/:id",deleteProduct);
module.exports = router;