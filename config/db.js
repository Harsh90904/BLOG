const mongoose = require('mongoose');

const dbcontent = async () => {
    await mongoose.connect("mongodb://localhost:27017/blog")
    console.log("Connected to MongoDB server");
}

module.exports = dbcontent