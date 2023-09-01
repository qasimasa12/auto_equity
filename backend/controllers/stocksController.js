const Stocks = require('../models/stocksModel')
const fs = require("fs");
const csv = require("csv-parser");

exports.postStocks = (req, res) => {
    if(req.body.firstcolumn){
      console.log(req.body);
      const stocks = new Stocks({
        LEAD_NAME: req.body.firstcolumn,
        Address:req.body.secondcolumn,
        Model: req.body.thirdcolumn,
        Reg_Number: req.body.fourthcolumn,
    })
    stocks.save()
    }else{
    // Sets multer to intercept file named "file" on uploaded form data
    console.log(req.body); // Logs form body values
    console.log(req.file); // Logs any files
    res.json({message: "File uploaded successfully"});
    
    fs.createReadStream(`./uploads/${req.file.originalname}`)
    .pipe(csv({}))
    .on("data", (data) => {
      const mappedData = {};
      for (const [key, value] of Object.entries(data)) {
        const mappedKey = key.replace(/\s/g, ""); // Remove spaces from column header names
        mappedData[mappedKey] = value;
      } 
      const stocks = new Stocks({
          LEAD_NAME: mappedData.LeadName,
          Address:mappedData.Address,
          Model: mappedData.Model,
          Reg_Number: mappedData.RegNumber,
      })
      stocks.save()
    })
    .on("end", () => {
      console.log('DONE')
    });
    }
    }

exports.getStocks = (req,res)=>{
    Stocks.find({}).then(data=>res.json(data))
    }

exports.updateStocks = (req,res)=>{
    console.log(req.body)
    Stocks.findByIdAndUpdate(
      req.body["_id"],
      {LEAD_NAME: req.body.LEAD_NAME ,
        Address: req.body.Address,
        Model: req.body.Model ,
        Reg_Number: req.body.Reg_Number,
     }).exec()
    }