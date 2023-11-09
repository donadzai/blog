const express = require('express');
const handlebars = require('express-handlebars');
// const Handlebars = require('handlebars');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;
// const {
//     allowInsecurePrototypeAccess,
// } = require('@handlebars/allow-prototype-access');

const route = require('./routes');
const db = require('./config/db');

// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true, // fix warning
    }),
); // xử lý middleware giữa submit form và server.
app.use(express.json()); // xử lý middleware giữa submit form và server.

//HTTP logger
// app.use(morgan('combined'));

///Template engine
app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs',
        // handlebars: allowInsecurePrototypeAccess(Handlebars),
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resourses', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
