const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/images/profileImage')
    },
    filename: function (req, file, cb) {
      cb(null, `${Date.now()}_${file.originalname.replace(/\s+/g,"_")}`);
    }
})

const upload = multer({ storage: storage });

const ProfileImageUpload = (req,res,next)=>{
    if (req.file) {
        req.image = `${req.file.path}`;
    }
    next();
}

module.exports = {upload, ProfileImageUpload};