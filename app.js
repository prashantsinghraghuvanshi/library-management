const express = require('express');
const app = express();
require('dotenv').config();
const dbMiddleware= require('./middleware/dbMiddleware');
const booksRouter = require('./routes/book.routes');

const PORT = process.env.APP_PORT || 5000;

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('home', __dirname + '/views/home')

app.use(express.urlencoded({ extended: false })); 

app.use(express.json());
app.use(dbMiddleware);

// Mount the router at the desired path
app.use('/', booksRouter); // Adjust the path as needed

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});