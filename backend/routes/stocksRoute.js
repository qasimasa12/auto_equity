const express = require('express')
const router = express.Router()
const {postStocks,getStocks,updateStocks} = require('../controllers/stocksController')
const multer = require("multer");
const path = require('path');

const filePath = path.join(__dirname, '../uploads')
  // Start by creating some disk storage options:
    const stocksStorage = multer.diskStorage({
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
    const stocksUpload = multer({
    storage: stocksStorage,
    fileFilter: function (req, file, callback) {
      if (!file.originalname.match(/\.(csv)$/)) {
        return callback(new Error("Only CSV files are allowed!"));
      }
      callback(null, true);
    },
    });
    
    router.post("/stocks-api", stocksUpload.single("file"),postStocks);
    router.get('/stocks-api',getStocks)
    router.post('/update-stocks-api',updateStocks)


    module.exports = router