// отримуємо доступ до форми та кнопки генерації команд
const form = document.querySelector('#players-form');
const generateButton = document.querySelector('#generate-button');

// додаємо обробник подій на кнопку генерації команд
generateButton.addEventListener('click', generateTeams);

function generateTeams() {
  // отримуємо кількість команд, що вибрав користувач
  const teamCount = parseInt(document.querySelector('#team-count').value);
  
  // отримуємо список гравців та їх рейтинг
  const playerList = [];
  const ratingList = [];
  const players = document.querySelectorAll('.player-name');
  const ratings = document.querySelectorAll('.player-rating');
  
  // заповнюємо масиви гравців та їх рейтинг
  for (let i = 0; i < players.length; i++) {
    playerList.push(players[i].value);
    ratingList.push(parseInt(ratings[i].value));
  }
  
  // розподіляємо гравців на команди
  const teams = [];
  for (let i = 0; i < teamCount; i++) {
    teams.push([]);
  }
  
  // сортуємо гравців за рейтингом
  const sortedPlayers = playerList.slice().sort((a, b) => {
    const aIndex = playerList.indexOf(a);
    const bIndex = playerList.indexOf(b);
    return ratingList[bIndex] - ratingList[aIndex];
  });
  
  // розподіляємо гравців на команди
  let teamIndex = 0;
  for (let i = 0; i < sortedPlayers.length; i++) {
    teams[teamIndex].push(sortedPlayers[i]);
    teamIndex = (teamIndex + 1) % teamCount;
  }
  
  // виводимо команди на екран
  const teamContainer = document.querySelector('#team-container');
  teamContainer.innerHTML = '';
  for (let i = 0; i < teamCount; i++) {
    const teamHeading = document.createElement('h2');
    teamHeading.textContent = `Команда ${i + 1}`;
    const teamList = document.createElement('ul');
    for (let j = 0; j < teams[i].length; j++) {
      const playerItem = document.createElement('li');
      playerItem.textContent = teams[i][j];
      teamList.appendChild(playerItem);
    }
    const teamDiv = document.createElement('div');
    teamDiv.appendChild(teamHeading);
    teamDiv.appendChild(teamList);
    teamContainer.appendChild(teamDiv);
  }
}
