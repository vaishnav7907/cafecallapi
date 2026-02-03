const mongoose = require("mongoose")

const authschema = new mongoose.Schema({


    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    Password: { type: String, required: true },
    Officename: { type: String, required: true}

})

const modelll = mongoose.model("userauthmodel", authschema)

module.exports = modelll