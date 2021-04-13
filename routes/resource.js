var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var books_controller = require('../controllers/books');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/books', books_controller.books_create_post);
// DELETE request to delete Handbag.
router.delete('/books/:id', books_controller.books_delete);
// PUT request to update Handbag.
router.put('/books/:id', books_controller.books_update_put);
// GET request for one Handbag.
router.get('/books/:id', books_controller.books_detail);
// GET request for list of all Handbag.
router.get('/books', books_controller.books_list);
module.exports = router;