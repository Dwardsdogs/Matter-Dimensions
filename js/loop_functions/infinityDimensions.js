function updateInfinityDimensionsUI() {
	let dims = game.infinity.infinityDimensions;

	//unlocking infinity dims
	if (game.infinity.breakInfinityUpgrades.upgrade3 == true) {
		document.getElementById("open-infinity-dimensions-tab").classList.remove("locked")
	}
	document.getElementById("infinity-dimensions-infinity-power-amount").innerHTML =
	`You have ${format(game.infinity.infinityPower, 1, false)} Infinity Power<br>
	×${format(Decimal.max(game.infinity.infinityPower.pow(5), new Decimal(1)), 1, false)} Matter Dimensions Multiplier`;
	//infinity dimensions
	createDimensionUI(dims, "infinity", 1, "1st Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 2, "2nd Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 3, "3rd Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 4, "4th Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 5, "5th Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 6, "6th Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 7, "7th Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
	createDimensionUI(dims, "infinity", 8, "8th Infinity Dimension", game.infinity.infinityPower, "Infinity Power")
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