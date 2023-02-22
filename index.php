<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
  <link rel="stylesheet" href="style.css">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Team generator</title>
</head>
<body>
  <h1><?php echo 'Team generator:' ?></h1>
  <div id="app">
  <form>
		<div v-for="(player, index) in players" :key="index" class="player">
		  <input v-model.trim="player.name" type="text" placeholder="Name">
		  <input v-model.number="player.level" type="number" min="1" max="10" placeholder="Level">
		  <button @click="removePlayer(index)">Remove</button>
		</div>
    <button type="button" @click="addPlayer">Add player</button>
    <div class="team-number">
      <label>Number of teams:</label>
      <input v-model.number="teamNumber" type="number" min="2">
    </div>
    <button type="button" @click="generateTeams">Generate teams</button>
  </form>

	<div v-if="teams.length">
    <h2>Generated teams:</h2>
    <table v-for="(team, index) in teams" :key="index">
      <caption>Team {{ index + 1 }}</caption>
      <thead>
        <tr>
          <th>Player</th>
          <th>Level</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(player, playerIndex) in team" :key="playerIndex">
          <td>{{ player.name }}</td>
          <td>{{ player.level }}</td>
        </tr>
      </tbody>
			<tfoot>
        <tr>
          <td>Total:</td>
          <td>{{ team.reduce((sum, player) => sum + parseInt(player.level), 0) }}</td>
        </tr>
        <tr>
				<td>Average:</td>
				<td>{{ ((team.reduce((sum, player) => sum + parseInt(player.level), 0)) / team.length).toFixed(1) }}</td>
        </tr>
      </tfoot>
    </table>
  </div>

</div>

</body>
<script src="scripts.js"></script>
</html>
