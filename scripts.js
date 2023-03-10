new Vue({
  el: '#app',
  data: {
    players: [
      { name: 'Vasyl', level: '2' },
      { name: 'Taras', level: '3' },
      { name: 'Denis', level: '10' },
      { name: 'Nastya', level: '9' },
      { name: 'Ivan', level: '5' },
      { name: 'Petro', level: '6' },
      { name: 'Oleksandr', level: '8' },
      { name: 'Anna', level: '10' }
    ],
    teamNumber: 2,
    teams: []
  },
  methods: {
    addPlayer: function() {
      this.players.push({ name: '', level: '' });
    },
    removePlayer: function(index) {
      if (this.players && this.players.length > index) {
        this.players.splice(index, 1);
      }
    },

    generateTeams: function() {
      if (!this.players || this.players.length === 0) {
        alert('Please enter player information');
        return;
      }

      this.teams = [];

      for (var i = 0; i < this.teamNumber; i++) {
        this.teams.push([]);
      }

      var sortedPlayers = this.players.slice().sort((a, b) => b.level - a.level);
      var teamIndex = 0;
      var direction = 1; // start assigning to Team 1, then to Team 2, then to Team 1, etc.

      sortedPlayers.forEach((player) => {
        this.teams[teamIndex].push({'name': player.name, 'level': player.level});

        // Move to the next team
        teamIndex += direction;

        // If we reach the end of the teams array, start from the last team
        if (teamIndex === this.teamNumber) {
          teamIndex = this.teamNumber - 1;
          direction = -1;
        } else if (teamIndex === -1) {
          teamIndex = 0;
          direction = 1;
        }
      });

    },
  }
});
