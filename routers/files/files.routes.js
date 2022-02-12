const express = require('express');
const multer= require('multer')

 const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {cb(null, 'public/uploads') },
    filename: (req, file, cb) => {
        const extension= file.mimetype.split('/')[1];
        cb(null,`${file.fieldname}-${Date.now()}.${extension}`);
     }
});
const upload= multer({storage});

router.post('/single',upload.single('single-file'), (req,res)=>{
    const file=req.file;

    if (!file) {
        const error= new Error('debes de subir un archivo');
        error.httpStatusCode=400;
        return next(error);
    }

    res.json({success:true, result:file});
})

  module.exports=router;