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

    // [Patch] /courses/:slug/restore
    async restore(req, res, next) {
        await Course.restore({ slug: req.params.slug });
        res.redirect('back');
    }

    async delete(req, res, next) {
        await Course.delete({ slug: req.params.slug });
        res.redirect('/me/stored/courses');
    }

    async force(req, res, next) {
        await Course.deleteOne({ slug: req.params.slug });
        res.redirect('back');
    }

    // [Post] /courses/handle-form-action
    async handleFormAction(req, res, next) {
        switch (req.body.actions) {
            case 'delete':
                await Course.delete({ slug: { $in: req.body.courseSlugs } });
                res.redirect('back');
                break;
            case 'restore':
                await Course.restore({ slug: { $in: req.body.courseSlugs } });
                res.redirect('back');
                break;
            case 'force':
                await Course.deleteOne({ slug: { $in: req.body.courseSlugs } });
                res.redirect('back');
                break;
            default:
                break;
        }
    }
}

module.exports = new CourseController();
