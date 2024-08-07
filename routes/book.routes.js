const express=require('express');
const router=express.Router();
const { addBook, getBooks, issueBook, returnBook } = require('../controllers/book.controller');

router.get("/",getBooks);
router.post("/addBook",addBook);
router.patch('/issueBook',issueBook);
router.patch('/returnBook',returnBook)

module.exports=router;
