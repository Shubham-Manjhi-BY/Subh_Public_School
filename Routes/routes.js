const express = require("express");

const router = express.Router();

const course_controller = require("../Controller/CourseController")


const learner_controller = require("../Controller/LearnerController")

router.post("/learners/add-learner",learner_controller.addLearner)

router.get("/learners",learner_controller.getAllLearner)

router.post("/learners/apply-filter",learner_controller.getLearnerByFilter)

router.patch("/learners/update",learner_controller.UpdateLearnerByFeilds)

router.delete("/learners/delete",learner_controller.DeleteLearnerByFeilds)



router.post("/courses/add-course",course_controller.addCourse)

router.get("/courses",course_controller.getAllCourse)

router.post("/courses/apply-filter",course_controller.getCourseByFilter)

router.patch("/courses/update",course_controller.UpdateCourseByFeilds)

router.delete("/courses/delete",course_controller.DeleteCourseByFeilds)


module.exports = router;








