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

    // [GET] /courses/create

    create(req, res, next) {
        res.render('courses/create');
    }

    // [GET] /courses/:slug/edit

    async edit(req, res, next) {
        const course = await Course.findOne({ slug: req.params.slug }).lean();
        res.render('courses/edit', { course });
    }

    async save(req, res, next) {
        const course = new Course(req.body);
        await course.save();
        res.redirect('/');
    }

    // [Put] /courses/:slug/edited

    async edited(req, res, next) {
        await Course.updateOne({ slug: req.params.slug }, req.body);
        res.redirect('/me/stored/courses');
    }
}

module.exports = new CourseController();
