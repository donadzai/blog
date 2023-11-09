const newRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');

function route(app) {
    app.use('/news', newRouter);
    app.use('/courses', courseRouter);
    app.use('/', siteRouter); // trang home and trang search
}

module.exports = route;
