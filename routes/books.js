var express = require('express');
const books_controlers= require('../controllers/books');
var router = express.Router();
/* GET books */
router.get('/', books_controlers.books_view_all_Page );
module.exports = router;
/* GET detail books page */
router.get('/detail', books_controlers.books_view_one_Page);
/* GET create books page */
router.get('/create', books_controlers.books_create_Page);
/* GET create update page */
router.get('/update', books_controlers.books_update_Page);
/* GET create books page */
router.get('/delete', books_controlers.books_delete_Page);
