const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    FIRST_NAME: String,
    LAST_NAME:String,
    Make: String,
    Model: String,
    Reg_Number: String,
    SalePrice: Number,
    Deposit: Number,
    BaloonPayment: Number,
    IntersestRate: Number,
    MileageAtStartofAgreement: Number,
    LengthofAgreement:Number,
    DateofAgreement:Date,
    PhoneNumber:Number,
    Email: String,
    Postcode:Number,
    Muleage:Number,
    Colour:String,
    Price:Number,
    MonthlyPayment:Number,
    CamountofEquity:Number,
    SalePrice:Number,
    type:{
      type: String,
      default: 'Unavailable'
    }
})

const Person = mongoose.model('person',dataSchema)

module.exports = Person