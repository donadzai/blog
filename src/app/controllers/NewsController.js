class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    //[Get] /news:slug (slug là biến động)
    show(req, res) {
        res.send('News detail');
    }
}

module.exports = new NewsController();
