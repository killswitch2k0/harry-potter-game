const {getRandomCharacter, getCharacterById} = require("../services/characters.service");

async function newRound(req, res) {
  const {id, image, name} = await getRandomCharacter()

  res.json({id, image, name});
}

async function guessCharacter(req, res) {
  const {id, house} = req.body;

  const character = await getCharacterById(id);

  const isWon = character && character.house === house;

  res.send(isWon ? 'win' : 'lose');
}

module.exports = {
  newRound,
  guessCharacter
}