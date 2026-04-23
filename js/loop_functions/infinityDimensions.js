function updateInfinityDimensionsUI() {
	let dims = game.infinity.infinityDimensions;

	//unlocking infinity dims
	if (game.infinity.breakInfinityUpgrades.upgrade3 == true) {
		document.getElementById("open-infinity-dimensions-tab").classList.remove("locked")
	}
	let infinityBoost1 = `×${format(Decimal.max(game.infinity.infinityPower.pow(5), new Decimal(1)), 1, false)} Matter Dimensions Multiplier`
	let infinityBoost2 = `Reach 10Sp Infinity Power`
	let infinityBoost3 = `Reach 1e50 Infinity Power`
	let infinityBoost4 = `Reach 1e100 Infinity Power`
	let infinityBoost5 = `Reach 1e200 Infinity Power`
	if (game.infinity.infinityPower.gte(1e25)) {
		infinityBoost2 = `×${format(game.infinity.infinityPower.div(1e25).pow(0.01))} Matter Dimensions Upgrade Power`
	}
	if (game.infinity.infinityPower.gte(1e50)) {
		infinityBoost3 = `×${format(game.infinity.infinityPower.div(1e50).pow(0.02))} Dimension Boost Power`
	}
	if (game.infinity.infinityPower.gte(1e100)) {
		infinityBoost4 = `+${format(game.infinity.infinityPower.div(1e100).log10().pow(0.5))}% Galaxy Power`
	}
	if (game.infinity.infinityPower.gte(1e200)) {
		infinityBoost5 = `Generate ${format(game.infinity.infinityPower.div(1e200).pow(0.05))}% of IP gain every second`
	}
	document.getElementById("infinity-dimensions-infinity-power-amount").innerHTML =
	`You have ${format(game.infinity.infinityPower, 1, false)} Infinity Power<br>
	${infinityBoost1}<br>
	${infinityBoost2}<br>
	${infinityBoost3}<br>
	${infinityBoost4}<br>
	${infinityBoost5}`;
	//infinity dimensions
	createDimensionUI(dims, "infinity", 1, "1st Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 2, "2nd Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 3, "3rd Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 4, "4th Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 5, "5th Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 6, "6th Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 7, "7th Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 8, "8th Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	//infinity dimension booster
	document.getElementById("double-infinity-power-upgrade-tooltip").textContent =
	`${format(game.infinity.doubleInfinityPowerUpgrade)} Purchased Upgrades`;
	document.getElementById("double-infinity-power-upgrade-multiplier").textContent =
	`1st Infinity Dimension Multiplier: ×${format(new Decimal(2).pow(game.infinity.doubleInfinityPowerUpgrade))}`;
	btn = document.getElementById("double-infinity-power-upgrade-button");
	if (game.continuum.doubleInfinityPowerUpgrade == true) {
		btn.classList.add("continuum");
		btn.classList.remove("unaffordable");
		btn.classList.remove("affordable");
		document.getElementById("double-infinity-power-upgrade-text").textContent =
		`Continuum: ${format(game.infinity.doubleInfinityPowerUpgrade)}`;
	} else {
		document.getElementById("double-infinity-power-upgrade-text").textContent =
		`×2 Power Cost: ${format(getCostScale(1e20, 1e2, game.infinity.doubleInfinityPowerUpgrade), 0)} IP`;
		if (game.infinity.infinityPoints.gte(getCostScale(1e20, 1e2, game.infinity.doubleInfinityPowerUpgrade))) {
			btn.classList.add("affordable");
			btn.classList.remove("unaffordable");
			btn.classList.remove("continuum");
		} else {
			btn.classList.add("unaffordable");
			btn.classList.remove("affordable");
			btn.classList.remove("continuum");
		}
	}
}

function createDimensionUI(dims, prefix, num, name, currency, currencyName) {
	document.getElementById(`${prefix}-dimension-${num}-tooltip`).textContent =
	`${format(dims.levels[`dim${num}`], 0)} Purchased Upgrades`;
	document.getElementById(`${prefix}-dimension-${num}-amount`).textContent =
	`${format(dims.amounts[`dim${num}`], 0)}`;
	document.getElementById(`${prefix}-dimension-${num}-multiplier`).innerHTML =
	`${name}<br>
	×${format(getInfinityDimensionMultiplier(num), 2, false)}`;
	let btn = document.getElementById(`buy-${prefix}-dimension-${num}-text`);
	if (game.continuum[`${prefix}Dimensions`][`dim${num}`] == true) {
		btn.parentElement.classList.add("continuum");
		btn.parentElement.classList.remove("unaffordable");
		btn.parentElement.classList.remove("affordable");
		btn.textContent =
		`Continuum: ${format(dims.levels[`dim${num}`], 2)}`;
	} else {
		btn.innerHTML =
		`Buy<br>
		Cost: ${format(getInfinityDimensionCost(num))} ${currencyName}`;
		if (currency.gte(getInfinityDimensionCost(num))) {
			btn.parentElement.classList.add("affordable");
			btn.parentElement.classList.remove("unaffordable");
			btn.parentElement.classList.remove("continuum");
		} else {
			btn.parentElement.classList.add("unaffordable");
			btn.parentElement.classList.remove("affordable");
			btn.parentElement.classList.remove("continuum");
		}
	}
}