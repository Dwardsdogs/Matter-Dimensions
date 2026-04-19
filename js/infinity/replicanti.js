function updateReplicanti(diff) {
	if (game.infinity.breakInfinityUpgrades.upgrade2 == true) {
		game.infinity.replicanti.amount = game.infinity.replicanti.amount.mul(getReplicantiMultiplier().pow(diff))
	}
}

function getReplicantiMultiplier() {
	let multiplier = new Decimal(0.01);
	let decayFactor = new Decimal(2);
	multiplier = multiplier.mul(new Decimal(1.2).pow(game.infinity.replicanti.upgrades.upgrade1));
	multiplier = multiplier.mul(game.infinity.replicanti.upgrades.upgrade2.add(1));
	multiplier = multiplier.pow(new Decimal(1).div(decayFactor.pow(game.infinity.replicanti.amount.log(new Decimal("1e100")))));
	multiplier = multiplier.add(1);
	return multiplier;
}

function getSyntheticGalaxyCost() {
	let cost = new Decimal(1e100);
	cost = cost.pow(game.infinity.replicanti.syntheticGalaxies.add(1));
	return cost;
}

document.getElementById("replicanti-upgrade-1").onclick = function () {
	if (game.infinity.infinityPoints.gte(getCostScale(1e10, 1e10, game.infinity.replicanti.upgrades.upgrade1))) {
		game.infinity.infinityPoints = game.infinity.infinityPoints.sub(getCostScale(1e10, 1e10, game.infinity.replicanti.upgrades.upgrade1))
		game.infinity.replicanti.upgrades.upgrade1 = game.infinity.replicanti.upgrades.upgrade1.add(1)
	}
};
document.getElementById("replicanti-upgrade-2").onclick = function () {
	if (game.infinity.infinityPoints.gte(getCostScale(2e5, 5, game.infinity.replicanti.upgrades.upgrade2))) {
		game.infinity.infinityPoints = game.infinity.infinityPoints.sub(getCostScale(2e5, 5, game.infinity.replicanti.upgrades.upgrade2))
		game.infinity.replicanti.upgrades.upgrade2 = game.infinity.replicanti.upgrades.upgrade2.add(1)
	}
};
document.getElementById("synthetic-galaxy-button").onclick = function () {
	if (game.infinity.replicanti.amount.gte(getSyntheticGalaxyCost())) {
		game.infinity.replicanti.amount = game.infinity.replicanti.amount.div(getSyntheticGalaxyCost())
		game.infinity.replicanti.syntheticGalaxies = game.infinity.replicanti.syntheticGalaxies.add(1)
	}
};