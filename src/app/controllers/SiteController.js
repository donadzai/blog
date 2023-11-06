const Course = require('../models/Course');

class SiteController {
    // [GET] /
    async index(req, res) {
        try {
            const data = await Course.find({});
            res.json(data);
        } catch (error) {
            console.log(error);
        }
    }

    //[Get] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
