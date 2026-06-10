import multer from "multer";
const allowedMimeTypes=[
    "application/pdf",
    "image/png",
    "text/csv",
    "image/jpeg",
    "application/vnd.ms-excel"
];
const uploading=multer=({
    dest:'/upload',
    limits:{
        fileSize:50*1024*1024
    },
    fileFilter:(req,file,cb)=>{
        if(allowedMimeTypes.includes(file.mimetype)){
            cb(null,true);
        }else{
            cb(new Error("Invalid file type. Please add only a pdf/png/csv file"),false);
        }
        cb(null,true)
    }
})
export default uploading;