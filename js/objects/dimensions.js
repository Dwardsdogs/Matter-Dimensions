function updateDimensions(diff) {
	let dims = game.dimensions;

	game.matter = game.matter.add(dims.amounts.dim1.mul(getDimensionMultiplier(1)).mul(diff))
	game.totalGeneratedMatter = game.totalGeneratedMatter.add(dims.amounts.dim1.mul(getDimensionMultiplier(1)).mul(diff))
	if (game.matter.gt(new Decimal("1.8e308"))) {
		if (game.infinity.breakInfinityUpgrades.unlocked == false) {
			game.matter = new Decimal("1.8e308")
		}
	}

	let gain = {
		dim1: dims.amounts.dim2.mul(getDimensionMultiplier(2)).mul(diff),
		dim2: dims.amounts.dim3.mul(getDimensionMultiplier(3)).mul(diff),
		dim3: dims.amounts.dim4.mul(getDimensionMultiplier(4)).mul(diff),
		dim4: dims.amounts.dim5.mul(getDimensionMultiplier(5)).mul(diff),
		dim5: dims.amounts.dim6.mul(getDimensionMultiplier(6)).mul(diff),
		dim6: dims.amounts.dim7.mul(getDimensionMultiplier(7)).mul(diff),
		dim7: dims.amounts.dim8.mul(getDimensionMultiplier(8)).mul(diff),
		dim8: new Decimal(0)
	};

	applyDimensionGain(dims, gain);
}

function applyDimensionGain(dims, gain) {
	dims.amounts.dim1 = dims.amounts.dim1.add(gain.dim1);
	dims.amounts.dim2 = dims.amounts.dim2.add(gain.dim2);
	dims.amounts.dim3 = dims.amounts.dim3.add(gain.dim3);
	dims.amounts.dim4 = dims.amounts.dim4.add(gain.dim4);
	dims.amounts.dim5 = dims.amounts.dim5.add(gain.dim5);
	dims.amounts.dim6 = dims.amounts.dim6.add(gain.dim6);
	dims.amounts.dim7 = dims.amounts.dim7.add(gain.dim7);
}

function buyDimension(dim) {
	let addedDimensions = new Decimal(1)
	if (game.infinity.infinityUpgrades.upgrade5 == true) {
		addedDimensions = addedDimensions.mul(10)
	}
	if (dim == 1) {
		if (game.matter.gte(getDimensionCost(1))) {
			game.matter = game.matter.sub(getDimensionCost(1));
			game.dimensions.levels.dim1 = game.dimensions.levels.dim1.add(1);
			game.dimensions.amounts.dim1 = game.dimensions.amounts.dim1.add(addedDimensions);
		}
	}
	if (dim == 2) {
		if (game.matter.gte(getDimensionCost(2))) {
			game.matter = game.matter.sub(getDimensionCost(2));
			game.dimensions.levels.dim2 = game.dimensions.levels.dim2.add(1);
			game.dimensions.amounts.dim2 = game.dimensions.amounts.dim2.add(addedDimensions);
		}
	}
	if (dim == 3) {
		if (game.matter.gte(getDimensionCost(3))) {
			game.matter = game.matter.sub(getDimensionCost(3));
			game.dimensions.levels.dim3 = game.dimensions.levels.dim3.add(1);
			game.dimensions.amounts.dim3 = game.dimensions.amounts.dim3.add(addedDimensions);
		}
	}
	if (dim == 4) {
		if (game.matter.gte(getDimensionCost(4))) {
			game.matter = game.matter.sub(getDimensionCost(4));
			game.dimensions.levels.dim4 = game.dimensions.levels.dim4.add(1);
			game.dimensions.amounts.dim4 = game.dimensions.amounts.dim4.add(addedDimensions);
		}
	}
	if (dim == 5) {
		if (game.matter.gte(getDimensionCost(5))) {
			game.matter = game.matter.sub(getDimensionCost(5));
			game.dimensions.levels.dim5 = game.dimensions.levels.dim5.add(1);
			game.dimensions.amounts.dim5 = game.dimensions.amounts.dim5.add(addedDimensions);
		}
	}
	if (dim == 6) {
		if (game.matter.gte(getDimensionCost(6))) {
			game.matter = game.matter.sub(getDimensionCost(6));
			game.dimensions.levels.dim6 = game.dimensions.levels.dim6.add(1);
			game.dimensions.amounts.dim6 = game.dimensions.amounts.dim6.add(addedDimensions);
		}
	}
	if (dim == 7) {
		if (game.matter.gte(getDimensionCost(7))) {
			game.matter = game.matter.sub(getDimensionCost(7));
			game.dimensions.levels.dim7 = game.dimensions.levels.dim7.add(1);
			game.dimensions.amounts.dim7 = game.dimensions.amounts.dim7.add(addedDimensions);
		}
	}
	if (dim == 8) {
		if (game.matter.gte(getDimensionCost(8))) {
			game.matter = game.matter.sub(getDimensionCost(8));
			game.dimensions.levels.dim8 = game.dimensions.levels.dim8.add(1);
			game.dimensions.amounts.dim8 = game.dimensions.amounts.dim8.add(addedDimensions);
		}
	}
}

function getDimensionCost(dim) {
	let scalingMultiplier = new Decimal(1)
	scalingMultiplier = scalingMultiplier.div(game.infinity.breakInfinityUpgrades.upgrade6.div(10).add(1))
	if (dim == 1) {
		return getCostScale(1, new Decimal(1e3).pow(scalingMultiplier), game.dimensions.levels.dim1)
	} else if (dim == 2) {
		return getCostScale(10, new Decimal(1e4).pow(scalingMultiplier), game.dimensions.levels.dim2)
	} else if (dim == 3) {
		return getCostScale(1e3, new Decimal(1e5).pow(scalingMultiplier), game.dimensions.levels.dim3)
	} else if (dim == 4) {
		return getCostScale(1e5, new Decimal(1e6).pow(scalingMultiplier), game.dimensions.levels.dim4)
	} else if (dim == 5) {
		return getCostScale(1e8, new Decimal(1e8).pow(scalingMultiplier), game.dimensions.levels.dim5)
	} else if (dim == 6) {
		return getCostScale(1e12, new Decimal(1e10).pow(scalingMultiplier), game.dimensions.levels.dim6)
	} else if (dim == 7) {
		return getCostScale(1e18, new Decimal(1e12).pow(scalingMultiplier), game.dimensions.levels.dim7)
	} else if (dim == 8) {
		return getCostScale(1e24, new Decimal(1e15).pow(scalingMultiplier), game.dimensions.levels.dim8)
	}
}

function getCostScale(startPrice, scale, level, scaleStart = 308.25) {
	startPrice = new Decimal(startPrice);
	scale = new Decimal(scale);
	level = new Decimal(level);
	scaleStart = new Decimal(scaleStart);
	scaleStart = scaleStart.sub(startPrice.log10());
	scaleStart = scaleStart.div(scale.log10()).floor();
	addedPow = Decimal.max(level.sub(scaleStart), new Decimal(0));
	addedPow = addedPow.mul(addedPow.add(1)).div(2);
	addedPow = addedPow.div(scale.log10());
	cost = scale.pow(level.add(addedPow));
	cost = cost.mul(startPrice);
	return cost
}

function getDimensionUpgradeMultiplier() {
	let multiplier = new Decimal(2)
	if (game.infinity.infinityUpgrades.upgrade7 == true) {
		multiplier = multiplier.add(0.2)
	}
	if (game.infinity.infinityPower.gte(1e25)) {
		multiplier = multiplier.mul(game.infinity.infinityPower.div(1e25).pow(0.01))
	}
	return multiplier
}

function getDimensionMultiplier(dim) {
	let dimmult = getTickspeedMultiplier()
	dimmult = dimmult.mul(getDimensionBoostMultiplier())
	if (game.infinity.infinityUpgrades.upgrade1 == true) {
		dimmult = dimmult.mul(Decimal.max(Decimal.max(game.totalGeneratedMatter, new Decimal(1)).log(1e10).add(1), new Decimal(1)))
	}
	if (game.infinity.infinityUpgrades.upgrade10 == true) {
		dimmult = dimmult.mul(game.dimensions.amounts.dim8.div(5).add(1))
	}
	dimmult = dimmult.mul(Decimal.min(game.infinity.replicanti.amount, new Decimal("1.8e308")))
	dimmult = dimmult.mul(Decimal.max(game.infinity.infinityPower.pow(5), new Decimal(1)))
	let purchaseMultiplier = getDimensionUpgradeMultiplier();
	if (dim == 1) {
		dimmult = purchaseMultiplier
			.pow(game.dimensions.levels.dim1)
			.div(purchaseMultiplier)
			.mul(dimmult);
		if (game.infinity.infinityUpgrades.upgrade12 == true) {
			dimmult = dimmult.mul(Decimal.max(Decimal.max(game.infinity.infinityPoints, new Decimal(1)).log10().add(1), new Decimal(1)).mul(10))
		}
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 2) {
		dimmult = purchaseMultiplier
			.pow(game.dimensions.levels.dim2)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 3) {
		dimmult = purchaseMultiplier
			.pow(game.dimensions.levels.dim3)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 4) {
		dimmult = purchaseMultiplier
			.pow(game.dimensions.levels.dim4)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 5) {
		dimmult = purchaseMultiplier
			.pow(game.dimensions.levels.dim5)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 6) {
		dimmult = purchaseMultiplier
			.pow(game.dimensions.levels.dim6)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 7) {
		dimmult = purchaseMultiplier
			.pow(game.dimensions.levels.dim7)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 8) {
		dimmult = purchaseMultiplier
			.pow(game.dimensions.levels.dim8)
			.div(purchaseMultiplier)
			.mul(dimmult);
		if (game.infinity.infinityUpgrades.upgrade9 == true) {
			dimmult = dimmult.mul(game.tickspeedUpgrades.mul(2).add(1))
		}
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
}

document.getElementById("buy-dimension-1").onclick = function () {
  buyDimension(1);
};
document.getElementById("buy-dimension-2").onclick = function () {
  buyDimension(2);
};
document.getElementById("buy-dimension-3").onclick = function () {
  buyDimension(3);
};
document.getElementById("buy-dimension-4").onclick = function () {
  buyDimension(4);
};
document.getElementById("buy-dimension-5").onclick = function () {
  buyDimension(5);
};
document.getElementById("buy-dimension-6").onclick = function () {
  buyDimension(6);
};
document.getElementById("buy-dimension-7").onclick = function () {
  buyDimension(7);
};
document.getElementById("buy-dimension-8").onclick = function () {
  buyDimension(8);
};

function maxAllUpgrades() {
	for (let i = 0; i < 100; i++) {
		buyDimension(1);
		buyDimension(2);
		buyDimension(3);
		buyDimension(4);
		if (game.dimensionBoosts.gte(1)) buyDimension(5);
		if (game.dimensionBoosts.gte(2)) buyDimension(6);
		if (game.dimensionBoosts.gte(3)) buyDimension(7);
		if (game.dimensionBoosts.gte(4)) buyDimension(8);
		buyTickspeed();
	}
}

//keybinds
const keysDown = new Set();

document.addEventListener("keydown", (event) => {
	keysDown.add(event.key.toLowerCase());
});

document.addEventListener("keyup", (event) => {
	keysDown.delete(event.key.toLowerCase());
});

setInterval(() => {
	if (keysDown.has("m")) {
		maxAllUpgrades()
	}

	if (keysDown.has("b")) {
		buyDimensionBoost();
	}

	if (keysDown.has("g")) {
		buyGalaxy();
	}

	if (keysDown.has("i")) {
		triggerInfinity();
	}
}, 50);