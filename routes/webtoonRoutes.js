const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const webtoonController = require('../controllers/webtoonController');

// GET all webtoons
router.get('/', webtoonController.getWebtoons);

// POST a new webtoon=
router.post('/',auth, webtoonController.addWebtoon);

// GET webtoon by ID
router.get('/:id', webtoonController.getWebtoonById);

// DELETE a webtoon by ID
router.delete('/:id', auth, webtoonController.deleteWebtoon);

module.exports = router;
