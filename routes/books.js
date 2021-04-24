var express = require('express');
const books_controlers= require('../controllers/books');
var router = express.Router();
/* GET books */
router.get('/', books_controlers.books_view_all_Page );
module.exports = router;
/* GET detail books page */
router.get('/detail', books_controlers.books_view_one_Page);


// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
     return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
   }

/* GET create update page */
router.get('/update',secured, books_controlers.books_update_Page);
/* GET create books page */
router.get('/create', secured,books_controlers.books_create_Page);
/* GET create books page */
router.get('/delete', secured,books_controlers.books_delete_Page);
