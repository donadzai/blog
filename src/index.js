const express = require('express');
const handlebars = require('express-handlebars');
// const Handlebars = require('handlebars');
const path = require('path');
const morgan = require('morgan');
const app = express();
const port = 3000;
const displaySortIcon = require('./app/midleware/displaySortIcon');
const methodOverride = require('method-override');
const jwt = require('jsonwebtoken');
// const {
//     allowInsecurePrototypeAccess,
// } = require('@handlebars/allow-prototype-access');

const route = require('./routes');
const db = require('./config/db');
const { log } = require('console');

// connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'resourses/views/me')));

app.use(
    express.urlencoded({
        extended: true, // fix warning
    }),
); // xử lý middleware giữa submit form và server.
app.use(express.json()); // xử lý middleware giữa submit form và server.

//Override
app.use(methodOverride('_method'));

//HTTP logger
// app.use(morgan('combined'));

// display sort icon by midleware

app.use('/me/stored/', displaySortIcon);

///Template engine
app.engine(
    '.hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum(a, b) {
                return a + b;
            },
            displayUserName(token) {
                const userName = jwt.verify(token, 'mk');
                return userName.userName;
            },
            displayIcon(filed, sort) {
                let iconSort;

                if (filed === sort.column) {
                    iconSort = sort.action;
                } else {
                    iconSort = 'default';
                }

                const icons = {
                    default: 'oi oi-elevator',
                    asc: 'oi oi-sort-ascending',
                    desc: 'oi oi-sort-descending',
                };

                const actions = {
                    default: 'asc',
                    desc: 'asc',
                    asc: 'desc',
                };

                const icon = icons[iconSort];
                const action = actions[iconSort];
                return `<a href='?sort=true&column=${filed}&action=${action}'>
                        <span class='${icon}'></span>
                    </a>`;
            },
        },
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
