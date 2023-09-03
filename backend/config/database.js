const mongoose = require('mongoose');


const dbConnection = () => {
    // mongoose.connect('mongodb+srv://admin-mohamed:test123@cluster0.a26evyh.mongodb.net/visoDB');

    mongoose.connect("mongodb+srv://admin-mohamed:test123@cluster0.a26evyh.mongodb.net/visoDB", {
        // config: { autoIndex: true },
    }).then(
        console.log("Database Connected!")
    ).catch((err) => console.log(err));

}

module.exports = dbConnection;