const router = require('express').Router();
const {
 // userControllerMethods???
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/students/:studentId
router.route('/:studentId').get(getSingleStudent).delete(deleteStudent);



module.exports = router;