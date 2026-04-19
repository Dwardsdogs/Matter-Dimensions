let lastUpdate = Date.now();

function gameLoop() {
	let now = Date.now();
	let diff = (now - lastUpdate) / 1000;
	lastUpdate = now;

	updateDimensions(diff);
	updateInfinityDimensions(diff);
	updateContinuum();
	updateReplicanti(diff);
	updateGenerators(diff);
	if (false == true) {
		game.infinity.infinityPoints = game.infinity.infinityPoints.add(getInfinityPointIncome().mul(0).mul(diff))
	}
}

function updateUI() {
	document.getElementById("matter").textContent =
	`You have ${format(game.matter, 1, false)} Matter`;
	if (game.infinity.unlocked == true) {
		document.getElementById("infinity-points").textContent =
		`You have ${format(game.infinity.infinityPoints, 0)} Infinity Points`;
	}

	updateDimensionsUI();
	updateInfinityDimensionsUI();
	updateInfinityUI();
	updateContinuumUI();
	updateReplicantiUI();
	updateGeneratorUI();
}

setInterval(gameLoop, 50);
setInterval(updateUI, 50);