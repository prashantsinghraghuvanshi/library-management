const express=require('express');
const router=express.Router();
const { addBook, getBooks, issueBook } = require('../controllers/book.controller');

router.get("/",getBooks);
router.post("/addBook",addBook);
router.patch('/issueBook',issueBook);

module.exports=router;
