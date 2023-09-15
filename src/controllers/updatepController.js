import { product } from "../models/product.js";

export async function updatepController(req,res)
{
    const {id} = req.params;

    const s = await product.updateOne({id},{$set :{price : 100}});
    console.log(s);

    res.send("updated");
}