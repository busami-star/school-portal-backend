import { Router } from 'express';
import { createCourse, getCourses, getCourse, updateCourse, deleteCourse } from '../controllers/courses.controller';

const router = Router();

router.post('/', createCourse);
router.get('/', getCourses);
router.get('/:id', getCourse);
router.put('/:id', updateCourse);
router.delete('/:id', deleteCourse);

export default router;