export function loginjwtController(req,res)
{
    res.json({message:"token genrated",token:req.token})

}