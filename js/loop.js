let lastUpdate = Date.now();

function gameLoop() {
	let now = Date.now();
	let diff = (now - lastUpdate) / 1000;
	lastUpdate = now;

	updateDimensions(diff);
	updateInfinityDimensions(diff);
	updateTimeDimensions(diff);
	updateContinuum();
	updateReplicanti(diff);
}

function updateUI() {
	document.getElementById("matter").textContent =
	`You have ${format(game.matter, 1, false)} Matter`;
	if (game.infinity.unlocked == true) {
		document.getElementById("infinity-points").textContent =
		`You have ${format(game.infinity.infinityPoints, 0)} Infinity Points`;
	} else {
		document.getElementById("infinity-points").textContent = ``;
	}
	if (game.eternity.unlocked == true) {
		document.getElementById("eternity-points").textContent =
		`You have ${format(game.eternity.eternityPoints, 0)} Eternity Points`;
	} else {
		document.getElementById("eternity-points").textContent = ``;
	}

	updateDimensionsUI();
	updateInfinityDimensionsUI();
	updateTimeDimensionsUI();
	updateInfinityUI();
	updateContinuumUI();
	updateReplicantiUI();
	updateEternityUI();
}

setInterval(gameLoop, 50);
setInterval(updateUI, 50);