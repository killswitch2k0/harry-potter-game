const characterEl = document.querySelector('.character-info');

export function renderCharacter(character) {
  characterEl.innerHTML = `
  <img src="${character.image}">
  <span>${character.name}</span>
`
}