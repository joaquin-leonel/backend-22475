const { products }= require('../data/data')
const authorizer=(req,res,next) =>{
   const {id}= req.query;
   const product= products.find(product=>product.id === +id)
   if (product) {
       req.product=product;
       next();
   } 
   else{
       res.status(401).send(`<h1>error: producto no encontrado </h1>`)
   }
  
}

module.exports= authorizer;