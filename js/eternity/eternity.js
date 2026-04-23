document.getElementById("eternity-button").onclick = function () {
  	triggerEternity();
};

function triggerEternity() {
	if (game.infinity.infinityPoints.gte(new Decimal("1.8e308"))) {
		game.eternity.eternityPoints = game.eternity.eternityPoints.add(getEternityPointIncome());
		game.eternity.totalGeneratedEP = game.eternity.totalGeneratedEP.add(getEternityPointIncome());
		game.eternity.eternities = game.eternity.eternities.add(1);
		resetVariables(4);
	}
}

function getEternityPointIncome() {
	let points = game.infinity.infinityPoints.log10().div(308.25).pow(2);
	points = points.floor();
	return points;
}