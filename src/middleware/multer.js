import multer from "multer";
        
const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "plain") {
      cb(null, true);
    } else {
      cb(new Error("Not a texting  File!!"), false);
    }
  };

const storage  = multer.diskStorage({
    destination : (req,file,cb) =>{
        cb(null,'/home/my/Desktop/express/uploads')
    },
    filename : (req,file,cb) =>{
        cb(null,Date.now() + '-' + file.originalname)
    }
})

export const upload = multer({storage:storage});
