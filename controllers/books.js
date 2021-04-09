var books = require('../models/books')
// List of all books
exports.books_list = async function (req, res) {
    // List of all books
    res.send('NOT IMPLEMENTED: books list');
};
exports.books_list = async function(req, res) {
    try{
    thebooks = await books.find();
    res.send(thebooks);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
// for a specific Handbag.
exports.books_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await books.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Handbag create on POST.
exports.books_create_post = async function (req, res) {
    console.log(req.body)
    let document = new books();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"Dimensions":"Stylish", "Color":"Violet", "Price":1500};
    document.name = req.body.name;
    document.author = req.body.author;
    document.price = req.body.price;
    try{
        let result = await document.save();
        res.send(result);
        }
        catch(err){
        res.error(500,`{"error": ${err}}`);
        }
    };
// Handle books delete form on DELETE.
exports.books_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Handbag delete DELETE ' + req.params.id);
};
// Handle books update form on PUT.
exports.books_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await books.findById( req.params.id)
        // Do updates of properties
        if(req.body.name) toUpdate.name = req.body.name;
        if(req.body.author) toUpdate.author = req.body.author;
        if(req.body.price) toUpdate.price = req.body.price;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};
// VIEWS
// Handle a show all view
exports.books_view_all_Page = async function(req, res) {
    try{
    thebooks = await books.find();
    res.render('books', { title: 'Handbag Search Results', results: thebooks });
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
