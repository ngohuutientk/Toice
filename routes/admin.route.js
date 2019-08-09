let express = require('express');
let router = express.Router();
let adminController = require('../controllers/admin.controller');

router.get('/tests', adminController.adminTest);
router.get('/tests/delete/:testID', adminController.deleteTest);
router.post('/tests/update', adminController.updateOrCreateTest);
router.get('/tests/:testID', adminController.adminQuestion);

router.post('/tests/:testID/questions/update', adminController.updateOrCreateQuestion);
router.get('/tests/:testID/questions/delete/:questionID', adminController.deleteQuestion);

module.exports = router;