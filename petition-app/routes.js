const express = require('express');
const router = express.Router();
const petitionController = require('./controllers/petitionController');

router.get('/', petitionController.index);
router.get('/petition/:id', petitionController.view);
router.get('/petition/delete/:id', petitionController.delete);
router.post('/petition', petitionController.create);
router.post('/petition/vote/:id', petitionController.vote);

module.exports = router;