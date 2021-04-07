var books = require('../models/books');
// List of all Costumes
exports.books_list = function(req, res) {
res.send('NOT IMPLEMENTED: Books list');
};
// for a specific Costume.
exports.books_detail = function(req, res) {
res.send('NOT IMPLEMENTED: books detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.books_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: books create POST');
};
// Handle Costume delete form on DELETE.
exports.books_delete = function(req, res) {
res.send('NOT IMPLEMENTED: books delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.books_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: books update PUT' + req.params.id);
};