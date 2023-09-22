const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

// Route / to the AppController
router.get('/', AppController.getHomepage);

// Route /students to StudentsController.getAllStudents
router.get('/students', StudentsController.getAllStudents);

// Route /students/:major to StudentsController.getAllStudentsByMajor
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

module.exports = router;
