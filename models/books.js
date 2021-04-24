const mongoose = require("mongoose")
const booksSchema = mongoose.Schema({
name: {type:String, required:[true,'Name is required']},
author: {type:String, requred:[true,'Auther name is required']},
price: {type:Number, min:[15,'Minimum Price is 15'],max:[30,'Maximum Price is 30']}
})
module.exports = mongoose.model("books", booksSchema)