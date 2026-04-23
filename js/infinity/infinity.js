document.getElementById("infinity-button").onclick = function () {
  	triggerInfinity();
};
document.getElementById("infinity-upgrade-1").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade1 == false) {
		if (game.infinity.infinityPoints.gte(1)) {
			game.infinity.infinityUpgrades.upgrade1 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(1);
		}
	}
};
document.getElementById("infinity-upgrade-2").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade2 == false) {
		if (game.infinity.infinityPoints.gte(1)) {
			game.infinity.infinityUpgrades.upgrade2 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(1);
		}
	}
};
document.getElementById("infinity-upgrade-3").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade3 == false) {
		if (game.infinity.infinityPoints.gte(1)) {
			game.infinity.infinityUpgrades.upgrade3 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(1);
			game.tickspeedUpgrades = game.tickspeedUpgrades.add(10)
		}
	}
};
document.getElementById("infinity-upgrade-4").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade4 == false) {
		if (game.infinity.infinityPoints.gte(1)) {
			game.infinity.infinityUpgrades.upgrade4 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(1);
		}
	}
};
document.getElementById("infinity-upgrade-5").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade5 == false) {
		if (game.infinity.infinityPoints.gte(5)) {
			game.infinity.infinityUpgrades.upgrade5 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(5);
			game.dimensions.amounts.dim1 = game.dimensions.amounts.dim1.mul(10)
			game.dimensions.amounts.dim2 = game.dimensions.amounts.dim2.mul(10)
			game.dimensions.amounts.dim3 = game.dimensions.amounts.dim3.mul(10)
			game.dimensions.amounts.dim4 = game.dimensions.amounts.dim4.mul(10)
			game.dimensions.amounts.dim5 = game.dimensions.amounts.dim5.mul(10)
			game.dimensions.amounts.dim6 = game.dimensions.amounts.dim6.mul(10)
			game.dimensions.amounts.dim7 = game.dimensions.amounts.dim7.mul(10)
			game.dimensions.amounts.dim8 = game.dimensions.amounts.dim8.mul(10)
		}
	}
};
document.getElementById("infinity-upgrade-6").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade6 == false) {
		if (game.infinity.infinityPoints.gte(15)) {
			game.infinity.infinityUpgrades.upgrade6 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(15);
		}
	}
};
document.getElementById("infinity-upgrade-7").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade7 == false) {
		if (game.infinity.infinityPoints.gte(25)) {
			game.infinity.infinityUpgrades.upgrade7 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(25);
		}
	}
};
document.getElementById("infinity-upgrade-8").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade8 == false) {
		if (game.infinity.infinityPoints.gte(50)) {
			game.infinity.infinityUpgrades.upgrade8 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(50);
		}
	}
};
document.getElementById("infinity-upgrade-9").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade9 == false) {
		if (game.infinity.infinityPoints.gte(100)) {
			game.infinity.infinityUpgrades.upgrade9 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(100);
		}
	}
};
document.getElementById("infinity-upgrade-10").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade10 == false) {
		if (game.infinity.infinityPoints.gte(250)) {
			game.infinity.infinityUpgrades.upgrade10 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(250);
		}
	}
};
document.getElementById("infinity-upgrade-11").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade11 == false) {
		if (game.infinity.infinityPoints.gte(500)) {
			game.infinity.infinityUpgrades.upgrade11 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(500);
		}
	}
};
document.getElementById("infinity-upgrade-12").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade12 == false) {
		if (game.infinity.infinityPoints.gte(1000)) {
			game.infinity.infinityUpgrades.upgrade12 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(1000);
		}
	}
};
document.getElementById("break-infinity-button").onclick = function () {
	if (game.infinity.infinityUpgrades.upgrade1 == true 
	&& game.infinity.infinityUpgrades.upgrade2 == true 
	&& game.infinity.infinityUpgrades.upgrade3 == true 
	&& game.infinity.infinityUpgrades.upgrade4 == true) {
		game.infinity.breakInfinityUpgrades.unlocked = true
	}
};
document.getElementById("break-infinity-upgrade-1").onclick = function () {
	if (game.infinity.breakInfinityUpgrades.upgrade1 == false) {
		if (game.infinity.infinityPoints.gte(10)) {
			game.infinity.breakInfinityUpgrades.upgrade1 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(10);
		}
	}
};
document.getElementById("break-infinity-upgrade-2").onclick = function () {
	if (game.infinity.breakInfinityUpgrades.upgrade2 == false) {
		if (game.infinity.infinityPoints.gte(1e5)) {
			game.infinity.breakInfinityUpgrades.upgrade2 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(1e5);
		}
	}
};
document.getElementById("break-infinity-upgrade-3").onclick = function () {
	if (game.infinity.breakInfinityUpgrades.upgrade3 == false) {
		if (game.infinity.infinityPoints.gte(1e16)) {
			game.infinity.breakInfinityUpgrades.upgrade3 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(1e16);
		}
	}
};
document.getElementById("break-infinity-upgrade-4").onclick = function () {
	if (game.infinity.infinityPoints.gte(getCostScale(10, 10, game.infinity.breakInfinityUpgrades.upgrade4))) {
		game.infinity.infinityPoints = game.infinity.infinityPoints.sub(getCostScale(10, 10, game.infinity.breakInfinityUpgrades.upgrade4));
		game.infinity.breakInfinityUpgrades.upgrade4 = game.infinity.breakInfinityUpgrades.upgrade4.add(1);
	}
};
document.getElementById("break-infinity-upgrade-5").onclick = function () {
	if (game.infinity.infinityPoints.gte(getCostScale(25, 30, game.infinity.breakInfinityUpgrades.upgrade5, 10))) {
		game.infinity.infinityPoints = game.infinity.infinityPoints.sub(getCostScale(25, 30, game.infinity.breakInfinityUpgrades.upgrade5, 10));
		game.infinity.breakInfinityUpgrades.upgrade5 = game.infinity.breakInfinityUpgrades.upgrade5.add(1);
	}
};
document.getElementById("break-infinity-upgrade-6").onclick = function () {
	if (game.infinity.infinityPoints.gte(getCostScale(50, 20, game.infinity.breakInfinityUpgrades.upgrade6, 10))) {
		game.infinity.infinityPoints = game.infinity.infinityPoints.sub(getCostScale(50, 20, game.infinity.breakInfinityUpgrades.upgrade6, 10));
		game.infinity.breakInfinityUpgrades.upgrade6 = game.infinity.breakInfinityUpgrades.upgrade6.add(1);
	}
};
document.getElementById("break-infinity-upgrade-7").onclick = function () {
	if (game.infinity.infinityPoints.gte(getCostScale(100, 5, game.infinity.breakInfinityUpgrades.upgrade7, 10))) {
		game.infinity.infinityPoints = game.infinity.infinityPoints.sub(getCostScale(100, 5, game.infinity.breakInfinityUpgrades.upgrade7, 10));
		game.infinity.breakInfinityUpgrades.upgrade7 = game.infinity.breakInfinityUpgrades.upgrade7.add(1);
	}
};
document.getElementById("break-infinity-upgrade-8").onclick = function () {
	if (game.infinity.breakInfinityUpgrades.upgrade8 == false) {
		if (game.infinity.infinityPoints.gte(1e50)) {
			game.infinity.breakInfinityUpgrades.upgrade8 = true;
			game.infinity.infinityPoints = game.infinity.infinityPoints.sub(1e50);
		}
	}
};

function triggerInfinity() {
	if (game.matter.gte(new Decimal("1.8e308"))) {
		game.infinity.infinityPoints = game.infinity.infinityPoints.add(getInfinityPointIncome());
		game.infinity.totalGeneratedIP = game.infinity.totalGeneratedIP.add(getInfinityPointIncome());
		resetVariables(3);
	}
}

function getInfinityPointIncome() {
	let points = game.matter.log10().div(308.25);
	points = new Decimal(10).pow(points.sub(1));
	points = points.mul(new Decimal(2).pow(game.infinity.breakInfinityUpgrades.upgrade4))
	points = points.floor();
	return points;
}