import { product } from "../models/product.js";


export async function readpController(req,res)
{
    const {id} = req.params;

    const p = await product.findOne({id});

    if(p)
    {
        res.json({message : "product found",p})
    }
    else{
        res.send("product not found")
    }

}