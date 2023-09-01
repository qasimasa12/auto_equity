const mongoose = require('mongoose');


const dbConnection = ()=>{
    mongoose.connect('mongodb+srv://admin-mohamed:test123@cluster0.a26evyh.mongodb.net/visoDB')
}

module.exports = dbConnection;