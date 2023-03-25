
let currentCharacter;

export async function guessCharacter(house) {
  const res = await fetch('http://localhost:3000/api/game/guess', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      id: currentCharacter.id,
      house
    })
  });

  const status = await res.text();

  return status;
}

export async function newRound() {
  const res = await fetch('http://localhost:3000/api/game/new');

  currentCharacter = await res.json()

  return currentCharacter;
}