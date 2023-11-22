const express = require('express');
const router = express.Router();
const CourseController = require('../app/controllers/CourseController');

router.get('/create', CourseController.create);
router.post('/save', CourseController.save);
router.get('/:slug/edit', CourseController.edit);
router.delete('/:slug/delete', CourseController.delete);
router.put('/:slug/edited', CourseController.edited);
router.get('/:slug', CourseController.courseDetail);

module.exports = router;
