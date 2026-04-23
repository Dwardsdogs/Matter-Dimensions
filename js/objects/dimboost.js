function getDimensionBoostCost(type) {
	if (type == "amount") {
		let amount = new Decimal(20)
		if (game.dimensionBoosts.gte(5)) {
			let addedMultiplier = new Decimal(20)
			if (game.infinity.infinityUpgrades.upgrade6 == true) {
				addedMultiplier = addedMultiplier.mul(0.75)
			}
			let addedAmount = game.dimensionBoosts.sub(4).mul(addedMultiplier)
			amount = amount.add(addedAmount)
		}
		if (game.infinity.infinityUpgrades.upgrade5 == false) {
			amount = amount.div(10)
		}
		return amount
	}
	if (type == "dimension") {
		if (game.dimensionBoosts.lte(0)) {
			return "4th"
		} else if (game.dimensionBoosts.lte(1)) {
			return "5th"
		} else if (game.dimensionBoosts.lte(2)) {
			return "6th"
		} else if (game.dimensionBoosts.lte(3)) {
			return "7th"
		} else if (game.dimensionBoosts.gte(4)) {
			return "8th"
		}
	}
}

function buyDimensionBoost(display) {
	let buyDimensionBoost = false
	if (getDimensionBoostCost("dimension") == "4th") {
		if (game.dimensions.amounts.dim4.gte(getDimensionBoostCost("amount"))) {
			buyDimensionBoost = true
		}
	}
	if (getDimensionBoostCost("dimension") == "5th") {
		if (game.dimensions.amounts.dim5.gte(getDimensionBoostCost("amount"))) {
			buyDimensionBoost = true
		}
	}
	if (getDimensionBoostCost("dimension") == "6th") {
		if (game.dimensions.amounts.dim6.gte(getDimensionBoostCost("amount"))) {
			buyDimensionBoost = true
		}
	}
	if (getDimensionBoostCost("dimension") == "7th") {
		if (game.dimensions.amounts.dim7.gte(getDimensionBoostCost("amount"))) {
			buyDimensionBoost = true
		}
	}
	if (getDimensionBoostCost("dimension") == "8th") {
		if (game.dimensions.amounts.dim8.gte(getDimensionBoostCost("amount"))) {
			buyDimensionBoost = true
		}
	}
	if (display != true) {
		if (buyDimensionBoost == true) {
			if (game.infinity.infinityUpgrades.upgrade8 == false) {
				resetVariables(1);
			}
			game.dimensionBoosts = game.dimensionBoosts.add(1);
		}
	} else if (buyDimensionBoost == true) {
		return true
	} else {
		return false
	}
}

function getDimensionBoostMultiplier() {
	let multiplier = getDimensionBoostPower()
	effectiveDimboostCount = game.dimensionBoosts
	effectiveDimboostCount = effectiveDimboostCount.add(getFreeDimensionBoostCount())
	multiplier = multiplier.pow(effectiveDimboostCount);
	return multiplier
}

function getFreeDimensionBoostCount() {
	let freeDimensionBoostCount = new Decimal(0);
	freeDimensionBoostCount = freeDimensionBoostCount.add(game.infinity.breakInfinityUpgrades.upgrade7);
	return freeDimensionBoostCount;
}

function getDimensionBoostPower() {
	multiplier = new Decimal(2);
	if (game.infinity.infinityUpgrades.upgrade2 == true) {
		multiplier = multiplier.mul(1.25)
	}
	if (game.infinity.infinityPower.gte(1e50)) {
		multiplier = multiplier.mul(game.infinity.infinityPower.div(1e50).pow(0.02))
	}
	return multiplier;
}

document.getElementById("buy-dimension-boost").onclick = function () {
  buyDimensionBoost();
};