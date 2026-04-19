function updateDimensionsUI() {
	let dims = game.dimensions;

	//dim mult per upgrade
	document.getElementById("upgrade-dimension-multiplier").textContent =
	`Dimension upgrade multiplier: ×${format(getDimensionUpgradeMultiplier(), 2, false)}`;
	//dim1
	document.getElementById("dimension-1-tooltip").textContent =
	`${format(game.dimensions.levels.dim1, 0)} Purchased Upgrades`;
	document.getElementById("dimension-1-amount").textContent =
	`${format(dims.amounts.dim1, 0)}`;
	document.getElementById("dimension-1-multiplier").innerHTML =
	`1st Matter Dimension<br>
	×${format(getDimensionMultiplier(1), 2, false)}`;
	let btn = document.getElementById("buy-dimension-1-text");
	if (game.continuum.dimensions.dim1 == true) {
		btn.parentElement.classList.add("continuum");
		btn.parentElement.classList.remove("unaffordable");
		btn.parentElement.classList.remove("affordable");
		btn.textContent =
		`Continuum: ${format(dims.levels.dim1, 2)}`;
	} else {
		btn.innerHTML =
		`Buy<br>
		Cost: ${format(getDimensionCost(1))} M`;
		if (game.matter.gte(getDimensionCost(1))) {
			btn.parentElement.classList.add("affordable");
			btn.parentElement.classList.remove("unaffordable");
			btn.parentElement.classList.remove("continuum");
		} else {
			btn.parentElement.classList.add("unaffordable");
			btn.parentElement.classList.remove("affordable");
			btn.parentElement.classList.remove("continuum");
		}
	}
	//dim2
	document.getElementById("dimension-2-tooltip").textContent =
	`${format(game.dimensions.levels.dim2, 0)} Purchased Upgrades`;
	document.getElementById("dimension-2-amount").textContent =
	`${format(dims.amounts.dim2, 0)}`;
	document.getElementById("dimension-2-multiplier").innerHTML =
	`2nd Matter Dimension<br>
	×${format(getDimensionMultiplier(2), 2, false)}`;
	btn = document.getElementById("buy-dimension-2-text");
	if (game.continuum.dimensions.dim2 == true) {
		btn.parentElement.classList.add("continuum");
		btn.parentElement.classList.remove("unaffordable");
		btn.parentElement.classList.remove("affordable");
		btn.textContent =
		`Continuum: ${format(dims.levels.dim2)}`;
	} else {
		btn.innerHTML =
		`Buy<br>
		Cost: ${format(getDimensionCost(2), 0)} M`;
		if (game.matter.gte(getDimensionCost(2))) {
			btn.parentElement.classList.add("affordable");
			btn.parentElement.classList.remove("unaffordable");
			btn.parentElement.classList.remove("continuum");
		} else {
			btn.parentElement.classList.add("unaffordable");
			btn.parentElement.classList.remove("affordable");
			btn.parentElement.classList.remove("continuum");
		}
	}
	//dim3
	document.getElementById("dimension-3-tooltip").textContent =
	`${format(game.dimensions.levels.dim3, 0)} Purchased Upgrades`;
	document.getElementById("dimension-3-amount").textContent =
	`${format(dims.amounts.dim3, 0)}`;
	document.getElementById("dimension-3-multiplier").innerHTML =
	`3rd Matter Dimension<br>
	×${format(getDimensionMultiplier(3), 2, false)}`;
	btn = document.getElementById("buy-dimension-3-text");
	if (game.continuum.dimensions.dim3 == true) {
		btn.parentElement.classList.add("continuum");
		btn.parentElement.classList.remove("unaffordable");
		btn.parentElement.classList.remove("affordable");
		btn.textContent =
		`Continuum: ${format(dims.levels.dim3)}`;
	} else {
		btn.innerHTML =
		`Buy<br>
		Cost: ${format(getDimensionCost(3), 0)} M`;
		if (game.matter.gte(getDimensionCost(3))) {
			btn.parentElement.classList.add("affordable");
			btn.parentElement.classList.remove("unaffordable");
			btn.parentElement.classList.remove("continuum");
		} else {
			btn.parentElement.classList.add("unaffordable");
			btn.parentElement.classList.remove("affordable");
			btn.parentElement.classList.remove("continuum");
		}
	}
	//dim4
	document.getElementById("dimension-4-tooltip").textContent =
	`${format(game.dimensions.levels.dim4, 0)} Purchased Upgrades`;
	document.getElementById("dimension-4-amount").textContent =
	`${format(dims.amounts.dim4, 0)}`;
	document.getElementById("dimension-4-multiplier").innerHTML =
	`4th Matter Dimension<br>
	×${format(getDimensionMultiplier(4), 2, false)}`;
	btn = document.getElementById("buy-dimension-4-text");
	if (game.continuum.dimensions.dim4 == true) {
		btn.parentElement.classList.add("continuum");
		btn.parentElement.classList.remove("unaffordable");
		btn.parentElement.classList.remove("affordable");
		btn.textContent =
		`Continuum: ${format(dims.levels.dim4)}`;
	} else {
		btn.innerHTML =
		`Buy<br>
		Cost: ${format(getDimensionCost(4), 0)} M`;
		if (game.matter.gte(getDimensionCost(4))) {
			btn.parentElement.classList.add("affordable");
			btn.parentElement.classList.remove("unaffordable");
			btn.parentElement.classList.remove("continuum");
		} else {
			btn.parentElement.classList.add("unaffordable");
			btn.parentElement.classList.remove("affordable");
			btn.parentElement.classList.remove("continuum");
		}
	}
	//dim5
	document.getElementById("dimension-5-tooltip").textContent =
	`${format(game.dimensions.levels.dim5, 0)} Purchased Upgrades`;
	document.getElementById("dimension-5-amount").textContent =
	`${format(dims.amounts.dim5, 0)}`;
	document.getElementById("dimension-5-multiplier").innerHTML =
	`5th Matter Dimension<br>
	×${format(getDimensionMultiplier(5), 2, false)}`;
	btn = document.getElementById("buy-dimension-5-text");
	if (game.continuum.dimensions.dim5 == true) {
		btn.parentElement.classList.add("continuum");
		btn.parentElement.classList.remove("unaffordable");
		btn.parentElement.classList.remove("affordable");
		btn.textContent =
		`Continuum: ${format(dims.levels.dim5)}`;
	} else {
		btn.innerHTML =
		`Buy<br>
		Cost: ${format(getDimensionCost(5), 0)} M`;
		if (game.matter.gte(getDimensionCost(5))) {
			btn.parentElement.classList.add("affordable");
			btn.parentElement.classList.remove("unaffordable");
			btn.parentElement.classList.remove("continuum");
		} else {
			btn.parentElement.classList.add("unaffordable");
			btn.parentElement.classList.remove("affordable");
			btn.parentElement.classList.remove("continuum");
		}
	}
	//dim6
	document.getElementById("dimension-6-tooltip").textContent =
	`${format(game.dimensions.levels.dim6, 0)} Purchased Upgrades`;
	document.getElementById("dimension-6-amount").textContent =
	`${format(dims.amounts.dim6, 0)}`;
	document.getElementById("dimension-6-multiplier").innerHTML =
	`6th Matter Dimension<br>
	×${format(getDimensionMultiplier(6), 2, false)}`;
	btn = document.getElementById("buy-dimension-6-text");
	if (game.continuum.dimensions.dim6 == true) {
		btn.parentElement.classList.add("continuum");
		btn.parentElement.classList.remove("unaffordable");
		btn.parentElement.classList.remove("affordable");
		btn.textContent =
		`Continuum: ${format(dims.levels.dim6)}`;
	} else {
		btn.innerHTML =
		`Buy<br>
		Cost: ${format(getDimensionCost(6), 0)} M`;
		if (game.matter.gte(getDimensionCost(6))) {
			btn.parentElement.classList.add("affordable");
			btn.parentElement.classList.remove("unaffordable");
			btn.parentElement.classList.remove("continuum");
		} else {
			btn.parentElement.classList.add("unaffordable");
			btn.parentElement.classList.remove("affordable");
			btn.parentElement.classList.remove("continuum");
		}
	}
	//dim7
	document.getElementById("dimension-7-tooltip").textContent =
	`${format(game.dimensions.levels.dim7, 0)} Purchased Upgrades`;
	document.getElementById("dimension-7-amount").textContent =
	`${format(dims.amounts.dim7, 0)}`;
	document.getElementById("dimension-7-multiplier").innerHTML =
	`7th Matter Dimension<br>
	×${format(getDimensionMultiplier(7), 2, false)}`;
	btn = document.getElementById("buy-dimension-7-text");
	if (game.continuum.dimensions.dim7 == true) {
		btn.parentElement.classList.add("continuum");
		btn.parentElement.classList.remove("unaffordable");
		btn.parentElement.classList.remove("affordable");
		btn.textContent =
		`Continuum: ${format(dims.levels.dim7)}`;
	} else {
		btn.innerHTML =
		`Buy<br>
		Cost: ${format(getDimensionCost(7), 0)} M`;
		if (game.matter.gte(getDimensionCost(7))) {
			btn.parentElement.classList.add("affordable");
			btn.parentElement.classList.remove("unaffordable");
			btn.parentElement.classList.remove("continuum");
		} else {
			btn.parentElement.classList.add("unaffordable");
			btn.parentElement.classList.remove("affordable");
			btn.parentElement.classList.remove("continuum");
		}
	}
	//dim8
	document.getElementById("dimension-8-tooltip").textContent =
	`${format(game.dimensions.levels.dim8, 0)} Purchased Upgrades`;
	document.getElementById("dimension-8-amount").textContent =
	`${format(dims.amounts.dim8, 0)}`;
	document.getElementById("dimension-8-multiplier").innerHTML =
	`8th Matter Dimension<br>
	×${format(getDimensionMultiplier(8), 2, false)}`;
	btn = document.getElementById("buy-dimension-8-text");
	if (game.continuum.dimensions.dim8 == true) {
		btn.parentElement.classList.add("continuum");
		btn.parentElement.classList.remove("unaffordable");
		btn.parentElement.classList.remove("affordable");
		btn.textContent =
		`Continuum: ${format(dims.levels.dim8)}`;
	} else {
		btn.innerHTML =
		`Buy<br>
		Cost: ${format(getDimensionCost(8), 0)} M`;
		if (game.matter.gte(getDimensionCost(8))) {
			btn.parentElement.classList.add("affordable");
			btn.parentElement.classList.remove("unaffordable");
			btn.parentElement.classList.remove("continuum");
		} else {
			btn.parentElement.classList.add("unaffordable");
			btn.parentElement.classList.remove("affordable");
			btn.parentElement.classList.remove("continuum");
		}
	}
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
	if (totalAmount <= 0) {
		totalDisplay = `${format(items[0])}`;
	}
	return totalDisplay;
}