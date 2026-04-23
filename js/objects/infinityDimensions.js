function updateInfinityDimensions(diff) {
	let dims = game.infinity.infinityDimensions;

	game.infinity.infinityPower = game.infinity.infinityPower.add(dims.amounts.dim1.mul(getInfinityDimensionMultiplier(1)).mul(diff))

	if (game.infinity.infinityPower.gte(1e200)) {
		game.infinity.infinityPoints = game.infinity.infinityPoints.add(getInfinityPointIncome().mul(game.infinity.infinityPower.div(1e200).pow(0.05).div(100).mul(diff)))
		game.infinity.totalGeneratedIP = game.infinity.totalGeneratedIP.add(getInfinityPointIncome().mul(game.infinity.infinityPower.div(1e200).pow(0.05).div(100).mul(diff)))
	}

	let gain = {
		dim1: dims.amounts.dim2.mul(getInfinityDimensionMultiplier(2)).mul(diff),
		dim2: dims.amounts.dim3.mul(getInfinityDimensionMultiplier(3)).mul(diff),
		dim3: dims.amounts.dim4.mul(getInfinityDimensionMultiplier(4)).mul(diff),
		dim4: dims.amounts.dim5.mul(getInfinityDimensionMultiplier(5)).mul(diff),
		dim5: dims.amounts.dim6.mul(getInfinityDimensionMultiplier(6)).mul(diff),
		dim6: dims.amounts.dim7.mul(getInfinityDimensionMultiplier(7)).mul(diff),
		dim7: dims.amounts.dim8.mul(getInfinityDimensionMultiplier(8)).mul(diff),
		dim8: new Decimal(0)
	};

	applyDimensionGain(dims, gain);
}

function buyInfinityDimension(dim) {
	let addedDimensions = new Decimal(1)
	if (dim == 1) {
		if (game.infinity.infinityPower.gte(getInfinityDimensionCost(1))) {
			game.infinity.infinityPower = game.infinity.infinityPower.sub(getInfinityDimensionCost(1));
			game.infinity.infinityDimensions.levels.dim1 = game.infinity.infinityDimensions.levels.dim1.add(1);
			game.infinity.infinityDimensions.amounts.dim1 = game.infinity.infinityDimensions.amounts.dim1.add(addedDimensions);
		}
	}
	if (dim == 2) {
		if (game.infinity.infinityPower.gte(getInfinityDimensionCost(2))) {
			game.infinity.infinityPower = game.infinity.infinityPower.sub(getInfinityDimensionCost(2));
			game.infinity.infinityDimensions.levels.dim2 = game.infinity.infinityDimensions.levels.dim2.add(1);
			game.infinity.infinityDimensions.amounts.dim2 = game.infinity.infinityDimensions.amounts.dim2.add(addedDimensions);
		}
	}
	if (dim == 3) {
		if (game.infinity.infinityPower.gte(getInfinityDimensionCost(3))) {
			game.infinity.infinityPower = game.infinity.infinityPower.sub(getInfinityDimensionCost(3));
			game.infinity.infinityDimensions.levels.dim3 = game.infinity.infinityDimensions.levels.dim3.add(1);
			game.infinity.infinityDimensions.amounts.dim3 = game.infinity.infinityDimensions.amounts.dim3.add(addedDimensions);
		}
	}
	if (dim == 4) {
		if (game.infinity.infinityPower.gte(getInfinityDimensionCost(4))) {
			game.infinity.infinityPower = game.infinity.infinityPower.sub(getInfinityDimensionCost(4));
			game.infinity.infinityDimensions.levels.dim4 = game.infinity.infinityDimensions.levels.dim4.add(1);
			game.infinity.infinityDimensions.amounts.dim4 = game.infinity.infinityDimensions.amounts.dim4.add(addedDimensions);
		}
	}
	if (dim == 5) {
		if (game.infinity.infinityPower.gte(getInfinityDimensionCost(5))) {
			game.infinity.infinityPower = game.infinity.infinityPower.sub(getInfinityDimensionCost(5));
			game.infinity.infinityDimensions.levels.dim5 = game.infinity.infinityDimensions.levels.dim5.add(1);
			game.infinity.infinityDimensions.amounts.dim5 = game.infinity.infinityDimensions.amounts.dim5.add(addedDimensions);
		}
	}
	if (dim == 6) {
		if (game.infinity.infinityPower.gte(getInfinityDimensionCost(6))) {
			game.infinity.infinityPower = game.infinity.infinityPower.sub(getInfinityDimensionCost(6));
			game.infinity.infinityDimensions.levels.dim6 = game.infinity.infinityDimensions.levels.dim6.add(1);
			game.infinity.infinityDimensions.amounts.dim6 = game.infinity.infinityDimensions.amounts.dim6.add(addedDimensions);
		}
	}
	if (dim == 7) {
		if (game.infinity.infinityPower.gte(getInfinityDimensionCost(7))) {
			game.infinity.infinityPower = game.infinity.infinityPower.sub(getInfinityDimensionCost(7));
			game.infinity.infinityDimensions.levels.dim7 = game.infinity.infinityDimensions.levels.dim7.add(1);
			game.infinity.infinityDimensions.amounts.dim7 = game.infinity.infinityDimensions.amounts.dim7.add(addedDimensions);
		}
	}
	if (dim == 8) {
		if (game.infinity.infinityPower.gte(getInfinityDimensionCost(8))) {
			game.infinity.infinityPower = game.infinity.infinityPower.sub(getInfinityDimensionCost(8));
			game.infinity.infinityDimensions.levels.dim8 = game.infinity.infinityDimensions.levels.dim8.add(1);
			game.infinity.infinityDimensions.amounts.dim8 = game.infinity.infinityDimensions.amounts.dim8.add(addedDimensions);
		}
	}
}

function getInfinityDimensionCost(dim) {
	let scalingMultiplier = new Decimal(1)
	if (dim == 1) {
		return getCostScale(1, new Decimal(10).pow(scalingMultiplier), game.infinity.infinityDimensions.levels.dim1)
	}
	if (dim == 2) {
		return getCostScale(1e2, new Decimal(1e3).pow(scalingMultiplier), game.infinity.infinityDimensions.levels.dim2)
	}
	if (dim == 3) {
		return getCostScale(1e6, new Decimal(1e6).pow(scalingMultiplier), game.infinity.infinityDimensions.levels.dim3)
	}
	if (dim == 4) {
		return getCostScale(1e12, new Decimal(1e10).pow(scalingMultiplier), game.infinity.infinityDimensions.levels.dim4)
	}
	if (dim == 5) {
		return getCostScale(1e20, new Decimal(1e15).pow(scalingMultiplier), game.infinity.infinityDimensions.levels.dim5)
	}
	if (dim == 6) {
		return getCostScale(1e30, new Decimal(1e21).pow(scalingMultiplier), game.infinity.infinityDimensions.levels.dim6)
	}
	if (dim == 7) {
		return getCostScale(1e42, new Decimal(1e28).pow(scalingMultiplier), game.infinity.infinityDimensions.levels.dim7)
	}
	if (dim == 8) {
		return getCostScale(1e56, new Decimal(1e36).pow(scalingMultiplier), game.infinity.infinityDimensions.levels.dim8)
	}
}

function getInfinityDimensionMultiplier(dim) {
	let dimmult = new Decimal(1)
	let purchaseMultiplier = new Decimal(2)
	if (game.infinity.breakInfinityUpgrades.upgrade8 == true) {
		dimmult = dimmult.mul(game.infinity.replicanti.amount.log10().div(100).pow(3).add(1))
	}
	if (dim == 1) {
		dimmult = purchaseMultiplier
			.pow(game.infinity.infinityDimensions.levels.dim1)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = dimmult.mul(new Decimal(2).pow(game.infinity.doubleInfinityPowerUpgrade));
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 2) {
		dimmult = purchaseMultiplier
			.pow(game.infinity.infinityDimensions.levels.dim2)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 3) {
		dimmult = purchaseMultiplier
			.pow(game.infinity.infinityDimensions.levels.dim3)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 4) {
		dimmult = purchaseMultiplier
			.pow(game.infinity.infinityDimensions.levels.dim4)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 5) {
		dimmult = purchaseMultiplier
			.pow(game.infinity.infinityDimensions.levels.dim5)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 6) {
		dimmult = purchaseMultiplier
			.pow(game.infinity.infinityDimensions.levels.dim6)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 7) {
		dimmult = purchaseMultiplier
			.pow(game.infinity.infinityDimensions.levels.dim7)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 8) {
		dimmult = purchaseMultiplier
			.pow(game.infinity.infinityDimensions.levels.dim8)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
}

document.getElementById("buy-infinity-dimension-1").onclick = function () {
	buyInfinityDimension(1);
};
document.getElementById("buy-infinity-dimension-2").onclick = function () {
	buyInfinityDimension(2);
};
document.getElementById("buy-infinity-dimension-3").onclick = function () {
	buyInfinityDimension(3);
};
document.getElementById("buy-infinity-dimension-4").onclick = function () {
	buyInfinityDimension(4);
};
document.getElementById("buy-infinity-dimension-5").onclick = function () {
	buyInfinityDimension(5);
};
document.getElementById("buy-infinity-dimension-6").onclick = function () {
	buyInfinityDimension(6);
};
document.getElementById("buy-infinity-dimension-7").onclick = function () {
	buyInfinityDimension(7);
};
document.getElementById("buy-infinity-dimension-8").onclick = function () {
	buyInfinityDimension(8);
};
document.getElementById("double-infinity-power-upgrade-button").onclick = function () {
	if (game.infinity.infinityPoints.gte(getCostScale(1e20, 1e2, game.infinity.doubleInfinityPowerUpgrade))) {
		game.infinity.infinityPoints = game.infinity.infinityPoints.sub(getCostScale(1e20, 1e2, game.infinity.doubleInfinityPowerUpgrade))
		game.infinity.doubleInfinityPowerUpgrade = game.infinity.doubleInfinityPowerUpgrade.add(1)
	}
};