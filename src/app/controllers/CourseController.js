const Course = require('../models/Course');

class CourseController {
    // [GET] /
    async courseDetail(req, res, next) {
        try {
            const course = await Course.findOne({ slug: req.params.slug }).lean();
            res.render('courses/course', { course });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new CourseController();
