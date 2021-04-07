const mongoose = require("mongoose")
const booksSchema = mongoose.Schema({
name: String,
author: String,
price: Number
})
module.exports = mongoose.model("books", booksSchema)