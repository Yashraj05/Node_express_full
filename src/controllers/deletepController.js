import { product } from "../models/product.js";

export async function deletepController(req,res)
{
    const {id} = req.params;

    const p = await product.deleteOne({id});

    console.log(p);

    res.send("deleted successfully");
}