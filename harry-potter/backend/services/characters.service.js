async function getAllCharacters() {
  const res = await fetch('https://hp-api.onrender.com/api/characters');

  const characters = await res.json();

  return characters
    .filter(character => character.house && character.image);
}

async function getRandomCharacter() {
  const characters = await getAllCharacters()
  const randomIndex = Math.floor(Math.random() * characters.length)

  return characters[randomIndex];
}

async function getCharacterById(id) {
  const allCharacter = await getAllCharacters();
  return allCharacter.find(character => character.id === id)
}

module.exports = {
  getRandomCharacter,
  getCharacterById
}