const Person = require('../models/presonModel')
const fs = require("fs");
const csv = require("csv-parser");



exports.postPerson = (req, res) => {
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
      const person1 = new Person({
          FIRST_NAME: mappedData.FirstName,
          LAST_NAME:mappedData.LastName,
          Make: mappedData.Make,
          Model: mappedData.Model,
          Reg_Number: mappedData.RegNumber,
          SalePrice: mappedData.SalePrice,
          Deposit: mappedData.Deposit,
          BaloonPayment: mappedData.BaloonPayment,
          IntersestRate: mappedData.IntersestRate,
          MileageAtStartofAgreement: mappedData.MileageAtStartofAgreement,
          LengthofAgreement:mappedData.LengthofAgreement,
          DateofAgreement:mappedData.StartDate,
          PhoneNumber:mappedData.PhoneNumber,
          Email: mappedData.Email,
          Postcode:mappedData.Postcode,
          Muleage:mappedData.Muleage,
          Colour:mappedData.Colour,
          Price:mappedData.Price,
          MonthlyPayment:mappedData.MonthlyPayment,
          CamountofEquity:mappedData.CamountofEquity
      })
      person1.save()
    })
    .on("end", () => {
      console.log('DONE')
    });
  }

  exports.getPerson = (req,res)=>{
    try {
      Person.find({}).then(data=>res.json(data))
    } catch (error) {
      res.status(400).send({error:"Something went wrong"});
    }
  }

  exports.editPerson = (req,res)=>{
    console.log(req.body)
    Person.findByIdAndUpdate(
      req.body["_id"],
      {FIRST_NAME: req.body.FIRST_NAME ,
        LAST_NAME: req.body.LAST_NAME,
        Make: req.body.audi ,
        Model: req.body.Model ,
        MonthlyPayment:req.body.MonthlyPayment,
        Colour:req.body.Colour
     }).exec()
  }