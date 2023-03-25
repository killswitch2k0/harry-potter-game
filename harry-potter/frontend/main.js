import {renderHouses} from './houses.js'
import {newRound} from "./game.service.js";
import {renderCharacter} from "./character.js";

const startBtn = document.querySelector('.start-game');
const app = document.querySelector('.app');

startBtn.addEventListener('click', async () => {
  const newChar = await newRound();
  app.classList.remove('hidden');
  startBtn.classList.add('hidden');
  renderCharacter(newChar);
});

const onFinish = (status) => {
  alert(status);
  startBtn.classList.remove('hidden');
  app.classList.add('hidden');
};
renderHouses(onFinish)