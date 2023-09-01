const express = require ('express');
const router = express.Router()
const {postPerson,getPerson,editPerson} = require('../controllers/personController')
const multer = require("multer");
const path = require('path');


const filePath = path.join(__dirname, '../uploads')
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, filePath);
    },
    // Sets file(s) to be saved in uploads folder in same directory
    filename: function (req, file, callback) {
      callback(null, file.originalname);
    },
    // Sets saved filename(s) to be original filename(s)
  });
  
  // Set saved storage options:
  const upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
      if (!file.originalname.match(/\.(csv)$/)) {
        return callback(new Error("Only CSV files are allowed!"));
      }
      callback(null, true);
    },
  });
  
  router.get('/api',getPerson)
  router.post("/api", upload.single("file"),postPerson);
  router.post('/data-api',editPerson)



module.exports = router;