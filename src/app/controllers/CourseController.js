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

    create(req, res, next) {
        res.render('courses/create');
    }

    async save(req, res, next) {
        const course = new Course(req.body);
        await course.save();
        res.redirect('/');
    }
}

module.exports = new CourseController();
