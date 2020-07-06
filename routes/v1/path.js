const router = require('express').Router()

const students = require('./students/students');
const questions = require('./asking_questions/asking_questions')
const answers = require('./answering_questions/answering_questions');
const subjects = require('./subjects/subjects');
const doubts = require('./doubts/doubts');
const classes = require('./classes/classes');
const ratings = require('./tutor_ratings/tutor_ratings');
const tutors = require('./tutors/tutors')

router.use('/students', students)
router.use('askingQuestions', questions);
router.use('/answeringQuestions', answers);
router.use('/subjects', subjects)
router.use('/doubts', doubts);
router.use('/classes', classes);
router.use('/tutorRatings', ratings)
router.use('/tutors', tutors)



module.exports = router