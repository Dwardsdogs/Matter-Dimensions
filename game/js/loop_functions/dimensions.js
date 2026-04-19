function updateDimensionsUI() {
	let dims = game.dimensions;

	//dim mult per upgrade
	document.getElementById("upgrade-dimension-multiplier").textContent =
	`Dimension upgrade multiplier: ×${format(getDimensionUpgradeMultiplier(), 2, false)}`;
	//dimensions
	createDimensionUI(dims, "matter", 1, "1st Matter Dimension", game.matter, "M")
	createDimensionUI(dims, "matter", 2, "2nd Matter Dimension", game.matter, "M")
	createDimensionUI(dims, "matter", 3, "3rd Matter Dimension", game.matter, "M")
	createDimensionUI(dims, "matter", 4, "4th Matter Dimension", game.matter, "M")
	createDimensionUI(dims, "matter", 5, "5th Matter Dimension", game.matter, "M")
	createDimensionUI(dims, "matter", 6, "6th Matter Dimension", game.matter, "M")
	createDimensionUI(dims, "matter", 7, "7th Matter Dimension", game.matter, "M")
	createDimensionUI(dims, "matter", 8, "8th Matter Dimension", game.matter, "M")
	//tickspeed
	document.getElementById("tickspeed-tooltip").textContent =
	`${getAddedDisplay([game.tickspeedUpgrades, getFreeTickspeedCount()])} Tickspeed Upgrades`;
	document.getElementById("tickspeed-multiplier").textContent =
	`Tickspeed: ${format(getTickspeedMultiplier(), 3)} / sec | ×${format(getTickspeedPower(), 3)} faster / upgrade.`;
	btn = document.getElementById("buy-tickspeed");
	if (game.continuum.tickspeed == true) {
		btn.classList.add("continuum");
		btn.classList.remove("unaffordable");
		btn.classList.remove("affordable");
		document.getElementById("buy-tickspeed-text").textContent =
		`Tickspeed Continuum: ${format(game.tickspeedUpgrades)}`;
	} else {
		document.getElementById("buy-tickspeed-text").textContent =
		`Tickspeed Cost: ${format(getTickspeedCost(), 0)} M`;
		if (game.matter.gte(getTickspeedCost())) {
			btn.classList.add("affordable");
			btn.classList.remove("unaffordable");
			btn.classList.remove("continuum");
		} else {
			btn.classList.add("unaffordable");
			btn.classList.remove("affordable");
			btn.classList.remove("continuum");
		}
	}
	//dimboosts
	if (game.dimensionBoosts.lt(1)) {
		document.getElementById("buy-dimension-boost").innerHTML =
			`Reset your Dimensions to unlock the<br>
			5th Dimension and give a ×${format(getDimensionBoostPower(), 1)}<br>
			multiplier to all Dimensions`;
	} else if (game.dimensionBoosts.lt(2)) {
		document.getElementById("buy-dimension-boost").innerHTML =
			`Reset your Dimensions to unlock the<br>
			6th Dimension and give a ×${format(getDimensionBoostPower(), 1)}<br>
			multiplier to all Dimensions`;
	} else if (game.dimensionBoosts.lt(3)) {
		document.getElementById("buy-dimension-boost").innerHTML =
			`Reset your Dimensions to unlock the<br>
			7th Dimension and give a ×${format(getDimensionBoostPower(), 1)}<br>
			multiplier to all Dimensions`;
	} else if (game.dimensionBoosts.lt(4)) {
		document.getElementById("buy-dimension-boost").innerHTML =
			`Reset your Dimensions to unlock the<br>
			8th Dimension and give a ×${format(getDimensionBoostPower(), 1)}<br>
			multiplier to all Dimensions`;
	} else {
		document.getElementById("buy-dimension-boost").innerHTML =
			`Reset your Dimensions to give a ×${format(getDimensionBoostPower(), 1)}<br>
			multiplier to all Dimensions`;
	}
	document.getElementById("dimension-boost-amount").textContent =
	`Dimension Boosts (${getAddedDisplay([game.dimensionBoosts, getFreeDimensionBoostCount()])})`;
	btn = document.getElementById("buy-dimension-boost");
	if (game.continuum.dimboosts == true) {
		btn.classList.add("continuum");
		btn.classList.remove("unaffordable");
		btn.classList.remove("affordable");
		document.getElementById("dimension-boost-cost").innerHTML =
		`<br>Dimension Boost Continuum: ${format(game.dimensionBoosts, 2)}`;
		document.getElementById("buy-dimension-boost").innerHTML =
			`Continuum produces all<br>
			of your Dimension Boosts`;
	} else {
		document.getElementById("dimension-boost-cost").innerHTML =
		`<br>Requires: ${formatCommas(getDimensionBoostCost("amount"), 0)} ${getDimensionBoostCost("dimension")} Matter D`;
		if (buyDimensionBoost(true)) {
			btn.classList.add("affordable");
			btn.classList.remove("unaffordable");
			btn.classList.remove("continuum");
		} else {
			btn.classList.add("unaffordable");
			btn.classList.remove("affordable");
			btn.classList.remove("continuum");
		}
	}
	//galaxies
	if (game.matterGalaxies.gte(getRemoteGalaxyPosition())) {
		document.getElementById("galaxy-amount").textContent =
		`Remote Matter Galaxies (${getAddedDisplay([game.matterGalaxies, getFreeGalaxyCount(), game.infinity.replicanti.syntheticGalaxies])})`;
	} else if (game.matterGalaxies.gte(getDistantGalaxyPosition())) {
		document.getElementById("galaxy-amount").textContent =
		`Distant Matter Galaxies (${getAddedDisplay([game.matterGalaxies, getFreeGalaxyCount(), game.infinity.replicanti.syntheticGalaxies])})`;
	} else {
		document.getElementById("galaxy-amount").textContent =
		`Matter Galaxies (${getAddedDisplay([game.matterGalaxies, getFreeGalaxyCount(), game.infinity.replicanti.syntheticGalaxies])})`;
	}
	btn = document.getElementById("buy-galaxy");
	let galaxyText = ``
	if (game.matterGalaxies.gte(getRemoteGalaxyPosition())) {
		galaxyText =
		`Increased Galaxy cost scaling: Quadratic scaling past ${formatCommas(getDistantGalaxyPosition())} (distant)<br>
		Exponential scaling past ${formatCommas(getRemoteGalaxyPosition())} (remote)`;
	} else if (game.matterGalaxies.gte(getDistantGalaxyPosition())) {
		galaxyText =
		`Each Galaxy is more expensive past ${formatCommas(getDistantGalaxyPosition())} Galaxies`;
	}
	if (game.continuum.galaxies == true) {
		btn.classList.add("continuum");
		btn.classList.remove("unaffordable");
		btn.classList.remove("affordable");
		document.getElementById("galaxy-cost").innerHTML =
		`Matter Galaxy Continuum: ${format(game.matterGalaxies, 2)}<br>
		${galaxyText}`;
		btn.innerHTML =
			`Continuum produces all<br>
			of your Matter Galaxies`;
	} else {
		document.getElementById("galaxy-cost").innerHTML =
		`Requires: ${formatCommas(getGalaxyCost(), 0)} 8th Matter D<br>
		${galaxyText}`;
		btn.innerHTML =
			`Reset your Dimensions and Dimension<br>
			Boosts to increase the power of<br>
			Tickspeed upgrades`;
		if (game.dimensions.amounts.dim8.gte(getGalaxyCost())) {
			btn.classList.add("affordable");
			btn.classList.remove("unaffordable");
			btn.classList.remove("continuum");
		} else {
			btn.classList.add("unaffordable");
			btn.classList.remove("affordable");
			btn.classList.remove("continuum");
		}
	}
	//dimboost unlocks
	if (game.dimensionBoosts.gte(1)) {
		document.getElementById("dimension-5").classList.remove("locked");
	} else {
		document.getElementById("dimension-5").classList.add("locked");
	}
	if (game.dimensionBoosts.gte(2)) {
		document.getElementById("dimension-6").classList.remove("locked");
	} else {
		document.getElementById("dimension-6").classList.add("locked");
	}
	if (game.dimensionBoosts.gte(3)) {
		document.getElementById("dimension-7").classList.remove("locked");
	} else {
		document.getElementById("dimension-7").classList.add("locked");
	}
	if (game.dimensionBoosts.gte(4)) {
		document.getElementById("dimension-8").classList.remove("locked");
	} else {
		document.getElementById("dimension-8").classList.add("locked");
	}
}

function getAddedDisplay(items) {
	let totalAmount = new Decimal(0);
	let totalTypes = 0;
	let totalDisplay = ``;
	for (const item of items) {
		if (item.gt(0)) {
			if (totalTypes >= 1) {
				totalDisplay = `${totalDisplay} + ${format(item)}`;
			} else {
				totalDisplay = `${format(item)}`;
			}
			totalTypes += 1;
			totalAmount = totalAmount.add(item);
		}
	}
	if (totalTypes >= 2) {
		totalDisplay = `${totalDisplay} = ${format(totalAmount)}`;
	}
	return totalDisplay;
}