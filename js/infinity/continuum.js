document.getElementById("continuum-upgrade-button").onclick = function () {
  if (game.matter.gte(getContinuumUpgradeCost())) {
	game.matter.sub(getContinuumUpgradeCost())
	game.continuumLevel = game.continuumLevel.add(1)
  }
};
document.getElementById("continuum-dimension-1-activate").onclick = function () {
  if (game.continuum.dimensions.dim1 == true) {
	game.continuum.dimensions.dim1 = false
  } else {
	game.continuum.dimensions.dim1 = true
  }
};
document.getElementById("continuum-dimension-2-activate").onclick = function () {
  if (game.continuum.dimensions.dim2 == true) {
	game.continuum.dimensions.dim2 = false
  } else if (game.continuumLevel.gte(1)) {
	game.continuum.dimensions.dim2 = true
  }
};
document.getElementById("continuum-dimension-3-activate").onclick = function () {
  if (game.continuum.dimensions.dim3 == true) {
	game.continuum.dimensions.dim3 = false
  } else if (game.continuumLevel.gte(3)) {
	game.continuum.dimensions.dim3 = true
  }
};
document.getElementById("continuum-dimension-4-activate").onclick = function () {
  if (game.continuum.dimensions.dim4 == true) {
	game.continuum.dimensions.dim4 = false
  } else if (game.continuumLevel.gte(6)) {
	game.continuum.dimensions.dim4 = true
  }
};
document.getElementById("continuum-dimension-5-activate").onclick = function () {
  if (game.continuum.dimensions.dim5 == true) {
	game.continuum.dimensions.dim5 = false
  } else if (game.continuumLevel.gte(10)) {
	game.continuum.dimensions.dim5 = true
  }
};
document.getElementById("continuum-dimension-6-activate").onclick = function () {
  if (game.continuum.dimensions.dim6 == true) {
	game.continuum.dimensions.dim6 = false
  } else if (game.continuumLevel.gte(15)) {
	game.continuum.dimensions.dim6 = true
  }
};
document.getElementById("continuum-dimension-7-activate").onclick = function () {
  if (game.continuum.dimensions.dim7 == true) {
	game.continuum.dimensions.dim7 = false
  } else if (game.continuumLevel.gte(21)) {
	game.continuum.dimensions.dim7 = true
  }
};
document.getElementById("continuum-dimension-8-activate").onclick = function () {
  if (game.continuum.dimensions.dim8 == true) {
	game.continuum.dimensions.dim8 = false
  } else if (game.continuumLevel.gte(28)) {
	game.continuum.dimensions.dim8 = true
  }
};
document.getElementById("continuum-tickspeed-activate").onclick = function () {
  if (game.continuum.tickspeed == true) {
	game.continuum.tickspeed = false
  } else if (game.continuumLevel.gte(36)) {
	game.continuum.tickspeed = true
  }
};
document.getElementById("continuum-dimension-boost-activate").onclick = function () {
  if (game.continuum.dimboosts == true) {
	game.continuum.dimboosts = false
  } else if (game.continuumLevel.gte(45)) {
	game.continuum.dimboosts = true
  }
};
document.getElementById("continuum-galaxy-activate").onclick = function () {
  if (game.continuum.galaxies == true) {
	game.continuum.galaxies = false
  } else if (game.continuumLevel.gte(55)) {
	game.continuum.galaxies = true
  }
};

function updateContinuum() {
	let addedDimensions = new Decimal(1)
	let dimensionScalingMultiplier = new Decimal(1)
	let tickspeedScalingMultiplier = new Decimal(1)
	dimensionScalingMultiplier = dimensionScalingMultiplier.div(game.infinity.breakInfinityUpgrades.upgrade6.div(10).add(1))
	tickspeedScalingMultiplier = tickspeedScalingMultiplier.div(game.infinity.breakInfinityUpgrades.upgrade5.div(10).add(1))
	if (game.infinity.infinityUpgrades.upgrade5 == true) {
		addedDimensions = addedDimensions.mul(10)
	}
	if (game.continuum.dimensions.dim1 == true) {
		level = getContinuumLevel(game.totalGeneratedMatter, new Decimal(1e3).pow(dimensionScalingMultiplier), 1);
		level = level.mul(getContinuumMultiplier(0));
		game.dimensions.amounts.dim1 = game.dimensions.amounts.dim1.add(level.sub(game.dimensions.levels.dim1).mul(addedDimensions));
		game.dimensions.levels.dim1 = level;
	}
	if (game.continuum.dimensions.dim2 == true) {
		level = getContinuumLevel(game.totalGeneratedMatter, new Decimal(1e4).pow(dimensionScalingMultiplier), 10);
		level = level.mul(getContinuumMultiplier(1));
		game.dimensions.amounts.dim2 = game.dimensions.amounts.dim2.add(level.sub(game.dimensions.levels.dim2).mul(addedDimensions));
		game.dimensions.levels.dim2 = level;
	}
	if (game.continuum.dimensions.dim3 == true) {
		level = getContinuumLevel(game.totalGeneratedMatter, new Decimal(1e5).pow(dimensionScalingMultiplier), 1e3);
		level = level.mul(getContinuumMultiplier(3));
		game.dimensions.amounts.dim3 = game.dimensions.amounts.dim3.add(level.sub(game.dimensions.levels.dim3).mul(addedDimensions));
		game.dimensions.levels.dim3 = level;
	}
	if (game.continuum.dimensions.dim4 == true) {
		level = getContinuumLevel(game.totalGeneratedMatter, new Decimal(1e6).pow(dimensionScalingMultiplier), 1e5);
		level = level.mul(getContinuumMultiplier(6));
		game.dimensions.amounts.dim4 = game.dimensions.amounts.dim4.add(level.sub(game.dimensions.levels.dim4).mul(addedDimensions));
		game.dimensions.levels.dim4 = level;
	}
	if (game.continuum.dimensions.dim5 == true) {
		if (game.dimensionBoosts.gte(1)) {
			level = getContinuumLevel(game.totalGeneratedMatter, new Decimal(1e8).pow(dimensionScalingMultiplier), 1e8);
			level = level.mul(getContinuumMultiplier(10));
			game.dimensions.amounts.dim5 = game.dimensions.amounts.dim5.add(level.sub(game.dimensions.levels.dim5).mul(addedDimensions));
			game.dimensions.levels.dim5 = level;
		}
	}
	if (game.continuum.dimensions.dim6 == true) {
		if (game.dimensionBoosts.gte(2)) {
			level = getContinuumLevel(game.totalGeneratedMatter, new Decimal(1e10).pow(dimensionScalingMultiplier), 1e12);
			level = level.mul(getContinuumMultiplier(15));
			game.dimensions.amounts.dim6 = game.dimensions.amounts.dim6.add(level.sub(game.dimensions.levels.dim6).mul(addedDimensions));
			game.dimensions.levels.dim6 = level;
		}
	}
	if (game.continuum.dimensions.dim7 == true) {
		if (game.dimensionBoosts.gte(3)) {
			level = getContinuumLevel(game.totalGeneratedMatter, new Decimal(1e12).pow(dimensionScalingMultiplier), 1e18);
			level = level.mul(getContinuumMultiplier(21));
			game.dimensions.amounts.dim7 = game.dimensions.amounts.dim7.add(level.sub(game.dimensions.levels.dim7).mul(addedDimensions));
			game.dimensions.levels.dim7 = level;
		}
	}
	if (game.continuum.dimensions.dim8 == true) {
		if (game.dimensionBoosts.gte(4)) {
			level = getContinuumLevel(game.totalGeneratedMatter, new Decimal(1e15).pow(dimensionScalingMultiplier), 1e24);
			level = level.mul(getContinuumMultiplier(28));
			game.dimensions.amounts.dim8 = game.dimensions.amounts.dim8.add(level.sub(game.dimensions.levels.dim8).mul(addedDimensions));
			game.dimensions.levels.dim8 = level;
		}
	}
	if (game.continuum.tickspeed == true) {
		level = getContinuumLevel(game.totalGeneratedMatter, new Decimal(10).pow(tickspeedScalingMultiplier), 1e3);
		level = level.mul(getContinuumMultiplier(36));
		game.tickspeedUpgrades = level;
	}
	if (game.continuum.dimboosts == true) {
		let dimensionBoostCostScale = new Decimal(2);
		if (game.infinity.infinityUpgrades.upgrade6 == true) {
			dimensionBoostCostScale = dimensionBoostCostScale.mul(0.75)
		}
		let dimensionAmountMultiplier = new Decimal(1);
		if (game.infinity.infinityUpgrades.upgrade5 == true) {
			dimensionAmountMultiplier = dimensionAmountMultiplier.mul(10)
		}
		if (game.dimensionBoosts.lt(1)) {
			level = Decimal.min(game.dimensions.amounts.dim4.div(dimensionAmountMultiplier.mul(2)), new Decimal(1));
		} else if (game.dimensionBoosts.lt(2)) {
			level = Decimal.min(game.dimensions.amounts.dim5.div(dimensionAmountMultiplier.mul(2)), new Decimal(1));
			level = level.add(1)
		} else if (game.dimensionBoosts.lt(3)) {
			level = Decimal.min(game.dimensions.amounts.dim6.div(dimensionAmountMultiplier.mul(2)), new Decimal(1));
			level = level.add(2)
		} else if (game.dimensionBoosts.lt(4)) {
			level = Decimal.min(game.dimensions.amounts.dim7.div(dimensionAmountMultiplier.mul(2)), new Decimal(1));
			level = level.add(3)
		} else if (game.dimensionBoosts.lt(5)) {
			level = Decimal.min(game.dimensions.amounts.dim8.div(dimensionAmountMultiplier.mul(2)), new Decimal(1));
			level = level.add(4)
		} else {
			level = game.dimensions.amounts.dim8.sub(dimensionAmountMultiplier.mul(2)).div(dimensionAmountMultiplier.mul(dimensionBoostCostScale));
			level = level.add(5)
		}
		game.dimensionBoosts = level;
	}
	if (game.continuum.galaxies == true) {
		let level = game.matterGalaxies
		if (game.dimensions.amounts.dim8.gte(getGalaxyCost(game.matterGalaxies.add(1000)))) {
			level = game.matterGalaxies.add(1000)
		} else if (game.dimensions.amounts.dim8.gte(getGalaxyCost(game.matterGalaxies.add(100)))) {
			level = game.matterGalaxies.add(100)
		} else if (game.dimensions.amounts.dim8.gte(getGalaxyCost(game.matterGalaxies.add(10)))) {
			level = game.matterGalaxies.add(10)
		} else if (game.dimensions.amounts.dim8.gte(getGalaxyCost(game.matterGalaxies.add(1)))) {
			level = game.matterGalaxies.add(1)
		} else if (game.dimensions.amounts.dim8.gte(getGalaxyCost(game.matterGalaxies.add(0.1)))) {
			level = game.matterGalaxies.add(0.1)
		} else if (game.dimensions.amounts.dim8.gte(getGalaxyCost(game.matterGalaxies.add(0.01)))) {
			level = game.matterGalaxies.add(0.01)
		} else if (game.dimensions.amounts.dim8.gte(getGalaxyCost(game.matterGalaxies.add(0.001)))) {
			level = game.matterGalaxies.add(0.001)
		}
		game.matterGalaxies = level;
	}
}

function getContinuumLevel(currency, scale, startPrice, scaleStart = 308.25) {
	currency = new Decimal(currency);
	startPrice = new Decimal(startPrice);
	scale = new Decimal(scale);
	scaleStart = new Decimal(scaleStart)
	scaleStart = scaleStart.sub(startPrice.log10())
	scaleStart = scaleStart.div(scale.log10()).floor()
	if (currency.lt(startPrice.div(scale))) return new Decimal(0);
	let x = currency.div(startPrice).log(scale);
	if (x.lte(scaleStart)) {
		return x.add(1);
	}
	let rhs = x.sub(scaleStart);
	let logScale = scale.log10();
	let A = new Decimal(0.5);
	let B = logScale.add(0.5);
	let C = rhs.mul(logScale).neg();
	let discriminant = B.pow(2).sub(A.mul(C).mul(4));
	let y = discriminant.sqrt().sub(B).div(A.mul(2));
	let level = scaleStart.add(y);
	return level.add(1);
}

function getContinuumUpgradeCost() {
	cost = new Decimal(1e50).pow(game.continuumLevel);
	cost = cost.mul("1e400");
	if (game.continuumLevel.gte(55)) {
		cost = cost.mul(new Decimal(10).pow(new Decimal(2).pow(game.continuumLevel.sub(55))));
	}
	return cost
}

function getContinuumMultiplier(lvl) {
	let multiplier = game.continuumLevel.sub(lvl).pow(0.5).div(40)
	multiplier = multiplier.add(1)
	multiplier = Decimal.max(multiplier, new Decimal(1));
	return multiplier
}