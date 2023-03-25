import {guessCharacter} from "./game.service.js";

const Houses = [
  {name: 'Gryffindor', image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71qheAe+f6L.jpg'},
  {name: 'Slytherin', image: 'https://static.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png'}
];

const housesEl = document.querySelector('.houses');

export function renderHouses(onFinish) {
  housesEl.innerHTML = '';
  Houses.forEach(house => {
    const div = document.createElement('div');

    div.addEventListener('click', async () => {
      const status = await guessCharacter(house.name);

      onFinish(status);
    })

    div.classList.add('house')
    div.innerHTML = `
    <img src="${house.image}" alt="${house.name}">
    <span>${house.name}</span>
  `;
    housesEl.appendChild(div);
  });
}