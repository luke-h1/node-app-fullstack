const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' }); // load dotenv config
const connectDb = require('./config/db.js');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 3000;
const exphbs = require('express-handlebars');
app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);

connectDb();

// morgan loggin
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// handebars templating
app.engine('.hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

// routes 
app.use('/', require('./routes/index'));