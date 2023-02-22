<?php
	// Отримуємо дані з форми
	$numPlayers = $_POST['numPlayers'];
	$numTeams = $_POST['numTeams'];

	$players = array();
	for ($i=1; $i <= $numPlayers; $i++) { 
		$name = $_POST['name'.$i];
		$rating = $_POST['rating'.$i];
		$players[] = array('name'=>$name, 'rating'=>$rating);
	}

	// Сортуємо гравців за рейтингом
	usort($players, function($a, $b) {
		return $b['rating'] - $a['rating'];
	});

	// Розподіляємо гравців по командах
	$teams = array();
	for ($i=0; $i < $numTeams; $i++) { 
		$teams[] = array();
	}

	$teamIndex = 0;
	foreach ($players as $player) {
		$teams[$teamIndex][] = $player;
		$teamIndex = ($teamIndex + 1) % $numTeams;
	}

	// Виводимо склади команд
	for ($i=0; $i < $numTeams; $i++) {
		echo '<h2>Команда '.($i+1).'</h2>';
		foreach ($teams[$i] as $player) {
			echo '<p>'.$player['name'].' ('.$player['rating'].')</p>';
		}
	}
?>
