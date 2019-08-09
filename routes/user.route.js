let express = require('express');
let router = express.Router();
let userController = require('../controllers/user.controller');

router.get('/signup', userController.signup);
router.post('/create', userController.postCreate);
router.get('/login', userController.login);
router.post('/login', userController.postLogin);

module.exports = router;