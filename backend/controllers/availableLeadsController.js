const Person = require('../models/presonModel')

exports.availableLeads = (req,res)=>{
    function subtractDates(dateStr) {
      const currentDate = new Date();
      const givenDate = new Date(dateStr);
      
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();
      const givenYear = givenDate.getFullYear();
      const givenMonth = givenDate.getMonth();
      
      const monthDifference = (currentYear - givenYear) * 12 + (currentMonth - givenMonth);
      
      return monthDifference;
    }
    Person.find({type:"Unavailable"}).then(data=>{
      const filteredData = data.filter((e)=>{
        return ((subtractDates(e.DateofAgreement)*e.MonthlyPayment)+e.Deposit > e.SalePrice) && e.SalePrice > 1
      })
      res.json(filteredData)
    })
  }

