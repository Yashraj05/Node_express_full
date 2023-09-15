

export default function logger(req,res,next){
 
    console.log("before");
    next();
    console.log('next')
}



