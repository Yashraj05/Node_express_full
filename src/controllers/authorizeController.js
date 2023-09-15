export function authorizeController(req,res)
{

    res.json({message :"service granted ",name:req.u_name });


} 