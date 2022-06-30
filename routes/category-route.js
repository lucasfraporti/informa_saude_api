const express = require('express');
const router = express.Router();

const CategoriesController = require('../controllers/category-controller');

router.get('/', CategoriesController.getAllReports);
router.get('/ativos', CategoriesController.getReportActive);
router.post('/', CategoriesController.postCategory);

module.exports = router;