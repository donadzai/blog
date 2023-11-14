const Course = require('../models/Course');

class MeController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {
        try {
            const courses = await Course.find({}).lean();
            res.render('me/myCourses', { courses });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new MeController();
