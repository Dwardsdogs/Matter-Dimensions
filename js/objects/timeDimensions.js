function updateTimeDimensions(diff) {
	let dims = game.eternity.timeDimensions;

	game.eternity.timeShards = game.eternity.timeShards.add(dims.amounts.dim1.mul(getTimeDimensionMultiplier(1)).mul(diff))

	let gain = {
		dim1: dims.amounts.dim2.mul(getTimeDimensionMultiplier(2)).mul(diff),
		dim2: dims.amounts.dim3.mul(getTimeDimensionMultiplier(3)).mul(diff),
		dim3: dims.amounts.dim4.mul(getTimeDimensionMultiplier(4)).mul(diff),
		dim4: dims.amounts.dim5.mul(getTimeDimensionMultiplier(5)).mul(diff),
		dim5: dims.amounts.dim6.mul(getTimeDimensionMultiplier(6)).mul(diff),
		dim6: dims.amounts.dim7.mul(getTimeDimensionMultiplier(7)).mul(diff),
		dim7: dims.amounts.dim8.mul(getTimeDimensionMultiplier(8)).mul(diff),
		dim8: new Decimal(0)
	};

	applyDimensionGain(dims, gain);
}

function buyTimeDimension(dim) {
	let addedDimensions = new Decimal(1)
	if (dim == 1) {
		if (game.eternity.eternityPoints.gte(getTimeDimensionCost(1))) {
			game.eternity.eternityPoints = game.eternity.eternityPoints.sub(getTimeDimensionCost(1));
			game.eternity.timeDimensions.levels.dim1 = game.eternity.timeDimensions.levels.dim1.add(1);
			game.eternity.timeDimensions.amounts.dim1 = game.eternity.timeDimensions.amounts.dim1.add(addedDimensions);
		}
	}
	if (dim == 2) {
		if (game.eternity.eternityPoints.gte(getTimeDimensionCost(2))) {
			game.eternity.eternityPoints = game.eternity.eternityPoints.sub(getTimeDimensionCost(2));
			game.eternity.timeDimensions.levels.dim2 = game.eternity.timeDimensions.levels.dim2.add(1);
			game.eternity.timeDimensions.amounts.dim2 = game.eternity.timeDimensions.amounts.dim2.add(addedDimensions);
		}
	}
	if (dim == 3) {
		if (game.eternity.eternityPoints.gte(getTimeDimensionCost(3))) {
			game.eternity.eternityPoints = game.eternity.eternityPoints.sub(getTimeDimensionCost(3));
			game.eternity.timeDimensions.levels.dim3 = game.eternity.timeDimensions.levels.dim3.add(1);
			game.eternity.timeDimensions.amounts.dim3 = game.eternity.timeDimensions.amounts.dim3.add(addedDimensions);
		}
	}
	if (dim == 4) {
		if (game.eternity.eternityPoints.gte(getTimeDimensionCost(4))) {
			game.eternity.eternityPoints = game.eternity.eternityPoints.sub(getTimeDimensionCost(4));
			game.eternity.timeDimensions.levels.dim4 = game.eternity.timeDimensions.levels.dim4.add(1);
			game.eternity.timeDimensions.amounts.dim4 = game.eternity.timeDimensions.amounts.dim4.add(addedDimensions);
		}
	}
	if (dim == 5) {
		if (game.eternity.eternityPoints.gte(getTimeDimensionCost(5))) {
			game.eternity.eternityPoints = game.eternity.eternityPoints.sub(getTimeDimensionCost(5));
			game.eternity.timeDimensions.levels.dim5 = game.eternity.timeDimensions.levels.dim5.add(1);
			game.eternity.timeDimensions.amounts.dim5 = game.eternity.timeDimensions.amounts.dim5.add(addedDimensions);
		}
	}
	if (dim == 6) {
		if (game.eternity.eternityPoints.gte(getTimeDimensionCost(6))) {
			game.eternity.eternityPoints = game.eternity.eternityPoints.sub(getTimeDimensionCost(6));
			game.eternity.timeDimensions.levels.dim6 = game.eternity.timeDimensions.levels.dim6.add(1);
			game.eternity.timeDimensions.amounts.dim6 = game.eternity.timeDimensions.amounts.dim6.add(addedDimensions);
		}
	}
	if (dim == 7) {
		if (game.eternity.eternityPoints.gte(getTimeDimensionCost(7))) {
			game.eternity.eternityPoints = game.eternity.eternityPoints.sub(getTimeDimensionCost(7));
			game.eternity.timeDimensions.levels.dim7 = game.eternity.timeDimensions.levels.dim7.add(1);
			game.eternity.timeDimensions.amounts.dim7 = game.eternity.timeDimensions.amounts.dim7.add(addedDimensions);
		}
	}
	if (dim == 8) {
		if (game.eternity.eternityPoints.gte(getTimeDimensionCost(8))) {
			game.eternity.eternityPoints = game.eternity.eternityPoints.sub(getTimeDimensionCost(8));
			game.eternity.timeDimensions.levels.dim8 = game.eternity.timeDimensions.levels.dim8.add(1);
			game.eternity.timeDimensions.amounts.dim8 = game.eternity.timeDimensions.amounts.dim8.add(addedDimensions);
		}
	}
}

function getTimeDimensionCost(dim) {
	let scalingMultiplier = new Decimal(1)
	if (dim == 1) {
		return getCostScale(1, new Decimal(3).pow(scalingMultiplier), game.eternity.timeDimensions.levels.dim1)
	}
	if (dim == 2) {
		return getCostScale(10, new Decimal(30).pow(scalingMultiplier), game.eternity.timeDimensions.levels.dim2)
	}
	if (dim == 3) {
		return getCostScale(1e3, new Decimal(3e2).pow(scalingMultiplier), game.eternity.timeDimensions.levels.dim3)
	}
	if (dim == 4) {
		return getCostScale(1e7, new Decimal(3e3).pow(scalingMultiplier), game.eternity.timeDimensions.levels.dim4)
	}
	if (dim == 5) {
		return getCostScale(1e15, new Decimal(3e4).pow(scalingMultiplier), game.eternity.timeDimensions.levels.dim5)
	}
	if (dim == 6) {
		return getCostScale(1e31, new Decimal(3e5).pow(scalingMultiplier), game.eternity.timeDimensions.levels.dim6)
	}
	if (dim == 7) {
		return getCostScale(1e63, new Decimal(3e6).pow(scalingMultiplier), game.eternity.timeDimensions.levels.dim7)
	}
	if (dim == 8) {
		return getCostScale(1e127, new Decimal(3e7).pow(scalingMultiplier), game.eternity.timeDimensions.levels.dim8)
	}
}

function getTimeDimensionMultiplier(dim) {
	let dimmult = new Decimal(1)
	let purchaseMultiplier = new Decimal(2)
	if (dim == 1) {
		dimmult = purchaseMultiplier
			.pow(game.eternity.timeDimensions.levels.dim1)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 2) {
		dimmult = purchaseMultiplier
			.pow(game.eternity.timeDimensions.levels.dim2)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 3) {
		dimmult = purchaseMultiplier
			.pow(game.eternity.timeDimensions.levels.dim3)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 4) {
		dimmult = purchaseMultiplier
			.pow(game.eternity.timeDimensions.levels.dim4)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 5) {
		dimmult = purchaseMultiplier
			.pow(game.eternity.timeDimensions.levels.dim5)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 6) {
		dimmult = purchaseMultiplier
			.pow(game.eternity.timeDimensions.levels.dim6)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 7) {
		dimmult = purchaseMultiplier
			.pow(game.eternity.timeDimensions.levels.dim7)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
	if (dim == 8) {
		dimmult = purchaseMultiplier
			.pow(game.eternity.timeDimensions.levels.dim8)
			.div(purchaseMultiplier)
			.mul(dimmult);
		dimmult = Decimal.max(dimmult, new Decimal(1));
		return dimmult
	}
}

document.getElementById("buy-time-dimension-1").onclick = function () {
	buyTimeDimension(1);
};
document.getElementById("buy-time-dimension-2").onclick = function () {
	buyTimeDimension(2);
};
document.getElementById("buy-time-dimension-3").onclick = function () {
	buyTimeDimension(3);
};
document.getElementById("buy-time-dimension-4").onclick = function () {
	buyTimeDimension(4);
};
document.getElementById("buy-time-dimension-5").onclick = function () {
	buyTimeDimension(5);
};
document.getElementById("buy-time-dimension-6").onclick = function () {
	buyTimeDimension(6);
};
document.getElementById("buy-time-dimension-7").onclick = function () {
	buyTimeDimension(7);
};
document.getElementById("buy-time-dimension-8").onclick = function () {
	buyTimeDimension(8);
};