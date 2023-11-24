const Course = require('../models/Course');

class MeController {
    // [GET] /me/stored/courses
    async storedCourses(req, res, next) {
        try {
            const courses = await Course.find({}).lean();
            const coursesDelete = await Course.countDocumentsWithDeleted({ deleted: true }).lean();
            res.render('me/myCourses', { courses, coursesDelete });
        } catch (error) {
            next(error);
        }
    }

    async trashCourses(req, res, next) {
        try {
            const courses = await Course.findWithDeleted({ deleted: true }).lean();
            res.render('me/myTrashCourses', { courses });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new MeController();
