const express = require('express');
const router = express.Router();
const bookCtrl = require('../controllers/book');

router.get('/', bookCtrl.getAllBooks);
router.get('/bestrating', bookCtrl.getBestBooks);
router.get('/:id', bookCtrl.getThisBook);
// router.post('/', bookCtrl.createBook);
// router.put('/:id', bookCtrl.modifyBook);
// router.delete('/:id', bookCtrl.deleteBook);

module.exports = router;