const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {    
    cb(null, "backend/images")
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(' ').join('-')
    const ext = file.mimetype
    cb(null, name + "-" + Date.now() + "." + ext)
  }  
})

module.exports = multer({storage: storage}).array('images')