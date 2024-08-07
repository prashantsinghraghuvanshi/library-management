const getBooks = async(req,res)=>{
    try{
        const[rows]=await req.db.query('SELECT * FROM books');
        res.render("home", {
            data: rows
        })
    }   catch(err){
        console.error('Error fetching books : ', err);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const addBook = async(req,res)=>{
    const {title, author, pages, price}=req.body;
    console.log(req.body);
    try{
        await req.db.query('INSERT INTO books (title, author, pages, price) VALUES (?, ?, ?, ?)', [title, author, pages, price]);
        const [rows] = await req.db.query('SELECT * FROM books');
        res.render("home",{
            data: rows
        })
    }   catch(error){
        console.error('Error adding book : ', error);
        res.status(500).json({error: 'Internal Server Error'});
    }
};

const issueBook = async (req, res) => {
    const title = req.body.title;  // Access the title from the request body
    try {
        const result = await req.db.query(
            `UPDATE books SET state = 'Issued' WHERE title = ?`,
            [title]
        );
        const [rows] = await req.db.query('SELECT * FROM books');
        res.render("home", {
            data: rows
        });
    } catch (error) {
        console.error('Error in Issuing book:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const returnBook = async(req,res)=>{
    const title=req.body.title;
    try {
        const result= await req.db.query(`UPDATE books SET state='Available' WHERE title=?`,[title]);
        const [rows]=await req.db.query(`SELECT * FROM books`);
        res.render("home",{
            data: rows
        })
    } catch (error) {
        console.error("Error in returning a book :", error);
        res.status(500).json({error: 'Internal Server Error'});
        
    }
}

module.exports={
    getBooks,
    addBook,
    issueBook,
    returnBook
}