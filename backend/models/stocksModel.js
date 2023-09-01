const mongoose = require('mongoose');


const stocksSchema = new mongoose.Schema({
    LEAD_NAME: String,
    Address:String,
    Model: String,
    Reg_Number: String,
  })

  const Stocks = mongoose.model('Stock',stocksSchema)

  module.exports = Stocks