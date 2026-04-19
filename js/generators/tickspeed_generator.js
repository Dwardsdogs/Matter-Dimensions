function getTickspeedGeneratorMultiplier(type) {
	multiplier = new Decimal(1);
	if (type == "gainUpgrade" || type == "all") {
		multiplier = multiplier.mul(new Decimal(2).pow(game.generators.tickspeedGeneratorUpgrades.doubleGain))
	}
	if (type == "gain2Upgrade" || type == "all") {
		multiplier = multiplier.mul(new Decimal(2).pow(game.generators.tickspeedGeneratorUpgrades.doubleGain2))
	}
	if (type == "gain3Upgrade" || type == "all") {
		multiplier = multiplier.mul(game.generators.tickspeedGeneratorUpgrades.doubleGain3)
	}
	if (type == "all") {
		multiplier = multiplier.div(getTickspeedGeneratorDecay())
	}
	return multiplier
}

function getTickspeedGeneratorCost(type) {
	cost = new Decimal(1);
	if (type == "gain") {
		cost = new Decimal(10).pow(game.generators.tickspeedGeneratorUpgrades.doubleGain);
		cost = cost.mul(500);
	} else if (type == "gain2") {
		cost = new Decimal(10).pow(new Decimal(10).pow(game.generators.tickspeedGeneratorUpgrades.doubleGain2.add(1)));
	} else if (type == "gain3") {
		cost = new Decimal(2).pow(game.generators.tickspeedGeneratorUpgrades.addGain);
		cost = cost.mul(50);
	} else if (type == "decay") {
		cost = new Decimal(100).pow(game.generators.tickspeedGeneratorUpgrades.decayWeakness);
		cost = cost.mul(1e3);
	} else if (type == "strength") {
		cost = new Decimal(10).pow(game.generators.tickspeedGeneratorUpgrades.tickspeedStrength);
		cost = cost.mul(1e4);
	}

	return cost
}

function getTickspeedGeneratorDecay() {
	let decay = new Decimal(1)
	decay = decay.mul(new Decimal(0.9).pow(game.generators.tickspeedGeneratorUpgrades.decayWeakness))
	decay = decay.add(1)
	let pow = new Decimal(0)
	let upgrades = game.tickspeedUpgrades
	pow = Decimal.max(upgrades, 1).log10()
	decay = decay.pow(pow)
	return decay
}

function updateGenerators(diff) {
	let addedTickspeed = getTickspeedGeneratorMultiplier("all")
	addedTickspeed = addedTickspeed.mul(diff)
	game.tickspeedUpgrades = game.tickspeedUpgrades.add(addedTickspeed)
}

document.getElementById("generator-tickspeed-gain-upgrade").onclick = function () {
	if (game.tickspeedUpgrades.gte(getTickspeedGeneratorCost("gain"))) {
		game.tickspeedUpgrades = game.tickspeedUpgrades.sub(getTickspeedGeneratorCost("gain"))
		game.generators.tickspeedGeneratorUpgrades.doubleGain = game.generators.tickspeedGeneratorUpgrades.doubleGain.add(1)
	}
};
document.getElementById("generator-tickspeed-gain2-upgrade").onclick = function () {
	if (game.matter.gte(getTickspeedGeneratorCost("gain2"))) {
		game.matter = game.matter.sub(getTickspeedGeneratorCost("gain2"))
		game.generators.tickspeedGeneratorUpgrades.doubleGain2 = game.generators.tickspeedGeneratorUpgrades.doubleGain2.add(1)
	}
};
document.getElementById("generator-tickspeed-gain3-upgrade").onclick = function () {
	if (game.tickspeedUpgrades.gte(getTickspeedGeneratorCost("gain3"))) {
		game.tickspeedUpgrades = game.tickspeedUpgrades.sub(getTickspeedGeneratorCost("gain3"))
		game.generators.tickspeedGeneratorUpgrades.addGain = game.generators.tickspeedGeneratorUpgrades.addGain.add(1)
	}
};
document.getElementById("generator-tickspeed-decay-upgrade").onclick = function () {
	if (game.tickspeedUpgrades.gte(getTickspeedGeneratorCost("decay"))) {
		game.tickspeedUpgrades = game.tickspeedUpgrades.sub(getTickspeedGeneratorCost("decay"))
		game.generators.tickspeedGeneratorUpgrades.decayWeakness = game.generators.tickspeedGeneratorUpgrades.decayWeakness.add(1)
	}
};
document.getElementById("generator-tickspeed-strength-upgrade").onclick = function () {
	if (game.tickspeedUpgrades.gte(getTickspeedGeneratorCost("strength"))) {
		game.tickspeedUpgrades = game.matter.sub(getTickspeedGeneratorCost("strength"))
		game.generators.tickspeedGeneratorUpgrades.tickspeedStrength = game.generators.tickspeedGeneratorUpgrades.tickspeedStrength.add(1)
	}
};