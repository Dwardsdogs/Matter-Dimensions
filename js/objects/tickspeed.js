function getTickspeedPower() {
	power = new Decimal(1.125);
	power = power.mul(getGalaxyMultiplier())
	return power
}

function getTickspeedCost() {
	let scalingMultiplier = new Decimal(1)
	scalingMultiplier = scalingMultiplier.div(game.infinity.breakInfinityUpgrades.upgrade5.div(10).add(1))
	return getCostScale(1e3, new Decimal(10).pow(scalingMultiplier), game.tickspeedUpgrades)
}

function buyTickspeed() {
	if (game.matter.gte(getTickspeedCost())) {
		game.matter = game.matter.sub(getTickspeedCost());
		game.tickspeedUpgrades = game.tickspeedUpgrades.add(1);
	}
}

function getFreeTickspeedCount() {
	let effectiveFreeTickspeedCount = new Decimal(0);
	if (game.infinity.infinityUpgrades.upgrade3 == true) {
		effectiveFreeTickspeedCount = effectiveFreeTickspeedCount.add(10);
	}
	return effectiveFreeTickspeedCount;
}

function getTickspeedMultiplier() {
	let multiplier = new Decimal(1)
	let tickspeedPower = getTickspeedPower()

	let tickspeedUpgradePower = tickspeedPower;
	let effectiveTickspeedUpgradeCount = game.tickspeedUpgrades;
	let tickspeedUpgradeMultiplier = tickspeedUpgradePower.pow(effectiveTickspeedUpgradeCount);

	let freeTickspeedPower = tickspeedPower;
	let effectiveFreeTickspeedCount = getFreeTickspeedCount();
	let freeTickspeedMultiplier = freeTickspeedPower.pow(effectiveFreeTickspeedCount);

	let eternityTickspeedPower = tickspeedPower;
	let effectiveEternityTickspeedCount = Decimal.max(game.eternity.timeShards, new Decimal(0.99)).log(1.33).add(1).floor();
	let eternityTickspeedMultiplier = eternityTickspeedPower.pow(effectiveEternityTickspeedCount);

	multiplier = multiplier.mul(tickspeedUpgradeMultiplier);
	multiplier = multiplier.mul(freeTickspeedMultiplier);
	multiplier = multiplier.mul(eternityTickspeedMultiplier);
	return multiplier;
}

document.getElementById("buy-tickspeed").onclick = function () {
  buyTickspeed();
};