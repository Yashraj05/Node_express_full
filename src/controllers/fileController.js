export  async function fileController(req,res) {

    try 
    {
        const files = await req.files;
        res.send(files);
    console.log(req.files);
    } catch (error) {
        if(error.message==="Not a texting  File!!")
        {
            res.json({error : error.message})
        }
        
    }
    
    
}