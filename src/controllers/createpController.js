import { product } from "../models/product.js";

export async function createpController(req,res)
{
    try {
        const {id,name,price} = req.body;

        const pd = new product({
            id,
            name,
            price
        })

        await pd.save();
        res.send("product added successfuly");
        
    } catch (error) {
        if (error.code === 11000) {
            res.json({ message: 'product with this id already exists, please choose a different id' });
          } else {
            res.json({ message: 'An error occurred' });
          }
    }
    
}