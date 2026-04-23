function getGalaxyCost(level = game.matterGalaxies) {
	let startCost = new Decimal(80);
	let addedCost = new Decimal(60);
	let distantScalingPosition = getDistantGalaxyPosition();
	let distantScalingPenalty = new Decimal(2);
	let remoteScalingPosition = getRemoteGalaxyPosition();
	let remoteScalingPenalty = new Decimal(1.002);

	addedCost = level.mul(addedCost);
	cost = startCost.add(addedCost);
	let distantScaling = Decimal.max(level.sub(distantScalingPosition.sub(1)), 0);
	distantScaling = distantScaling.mul(distantScaling.add(1)).div(2).mul(distantScalingPenalty);
	let remoteScaling = Decimal.max(new Decimal(remoteScalingPenalty).pow(level.sub(remoteScalingPosition.sub(1))), new Decimal(1));
	cost = cost.add(distantScaling);
	cost = cost.mul(remoteScaling);
	if (game.infinity.infinityUpgrades.upgrade5 == false) {
		cost = cost.div(10);
	}
	return cost;
}

function getDistantGalaxyPosition() {
	let position = new Decimal(100);
	return position;
}

function getRemoteGalaxyPosition() {
	let position = new Decimal(800);
	return position;
}

function buyGalaxy() {
	if (game.dimensions.amounts.dim8.gte(getGalaxyCost())) {
		resetVariables(2);
		game.matterGalaxies = game.matterGalaxies.add(1);
	}
}

function getFreeGalaxyCount() {
	let effectiveFreeGalaxyCount = new Decimal(0)
	if (game.infinity.infinityUpgrades.upgrade11 == true) {
		effectiveFreeGalaxyCount = effectiveFreeGalaxyCount.add(1)
	}
	return effectiveFreeGalaxyCount
}

function getGalaxyPower() {
	let galaxyPower = new Decimal(0.02);
	if (game.infinity.infinityUpgrades.upgrade4 == true) {
		galaxyPower = galaxyPower.mul(2)
	}
	if (game.infinity.infinityPower.gte(1e100)) {
		galaxyPower = galaxyPower.add(game.infinity.infinityPower.div(1e100).log10().pow(0.5).div(100).mul(galaxyPower))
	}
	galaxyPower = galaxyPower.add(1)
	return galaxyPower
}

function getGalaxyMultiplier() {
	let multiplier = new Decimal(1)
	let totalGalaxyPower = getGalaxyPower()

	let matterGalaxyPower = totalGalaxyPower;
	let effectiveMatterGalaxyCount = game.matterGalaxies;
	let matterGalaxyMultiplier = matterGalaxyPower.pow(effectiveMatterGalaxyCount);

	let freeGalaxyPower = totalGalaxyPower;
	let effectiveFreeGalaxyCount = getFreeGalaxyCount();
	let freeGalaxyMultiplier = freeGalaxyPower.pow(effectiveFreeGalaxyCount)

	let syntheticGalaxyPower = totalGalaxyPower;
	let effectiveSyntheticGalaxyCount = game.infinity.replicanti.syntheticGalaxies;
	let syntheticGalaxyMultiplier = syntheticGalaxyPower.pow(effectiveSyntheticGalaxyCount);

	multiplier = multiplier.mul(matterGalaxyMultiplier);
	multiplier = multiplier.mul(freeGalaxyMultiplier);
	multiplier = multiplier.mul(syntheticGalaxyMultiplier);
	return multiplier
}

document.getElementById("buy-galaxy").onclick = function () {
  buyGalaxy();
};