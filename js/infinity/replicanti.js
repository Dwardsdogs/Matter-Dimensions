function updateReplicanti(diff) {
	if (game.infinity.breakInfinityUpgrades.upgrade2 == true) {
		game.infinity.replicanti.amount = game.infinity.replicanti.amount.mul(getReplicantiMultiplier().pow(diff))
	}
}

function getReplicantiMultiplier() {
	let multiplier = new Decimal(1.01);
	let decayFactor = new Decimal(2);
	multiplier = multiplier.pow(new Decimal(1.2).pow(game.infinity.replicanti.upgrades.upgrade1));
	multiplier = multiplier.pow(game.infinity.replicanti.upgrades.upgrade2.add(1));
	multiplier = multiplier.pow(new Decimal(1).div(decayFactor.pow(game.infinity.replicanti.amount.log(new Decimal("1e1000")))));
	return multiplier;
}

function getSyntheticGalaxyCost(level = game.infinity.replicanti.syntheticGalaxies) {
	let startCost = new Decimal("1e100");
	let addedCost = new Decimal("1e100");
	let unstableScalingPosition = new Decimal(20);
	let unstableScalingPenalty = new Decimal(25);
	let distortedScalingPosition = new Decimal(150);
	let distortedScalingPenalty = new Decimal(1.01);

	addedCost = addedCost.pow(level);
	cost = startCost.mul(addedCost);
	let unstableScaling = Decimal.max(level.sub(unstableScalingPosition.sub(1)), 0);
	unstableScaling = unstableScaling.mul(unstableScaling.add(1)).div(2).mul(unstableScalingPenalty);
	unstableScaling = new Decimal(10).pow(unstableScaling)
	let distortedScaling = Decimal.max(new Decimal(distortedScalingPenalty).pow(level.sub(distortedScalingPosition.sub(1))), new Decimal(1));
	cost = cost.mul(unstableScaling);
	cost = cost.pow(distortedScaling);
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