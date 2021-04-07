var books = require('../models/books');
// List of all books
exports.books_list = async function(req, res) {
    try{
    thebooks = await books.find();
    res.send(thebooks);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    }
    };
//res.send('NOT IMPLEMENTED: Books list');

// for a specific books.
exports.books_detail = function(req, res) {
res.send('NOT IMPLEMENTED: books detail: ' + req.params.id);
};
// Handle books create on POST.
exports.books_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: books create POST');
};
// Handle books delete form on DELETE.
exports.books_delete = function(req, res) {
res.send('NOT IMPLEMENTED: books delete DELETE ' + req.params.id);
};
// Handle books update form on PUT.
exports.books_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: books update PUT' + req.params.id);
};