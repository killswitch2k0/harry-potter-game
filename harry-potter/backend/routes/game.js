const router = require('express').Router();
const controller = require('../controllers/game.controller')

router.get('/api/game/new', controller.newRound);
router.post('/api/game/guess', controller.guessCharacter);

module.exports = router;

