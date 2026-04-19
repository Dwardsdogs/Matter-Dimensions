function updateInfinityUI() {
	//unlocking infinity
	if (game.infinity.unlocked == true) {
		document.getElementById("infinity-tab-group").classList.remove("locked")
	} else if (game.matter.gte(new Decimal("1.8e308"))) {
		game.infinity.unlocked = true;
	}
	//infinity button
	if (game.matter.gte(new Decimal("1.8e308"))) {
		document.getElementById("infinity-button").classList.add("affordable")
		document.getElementById("infinity-button").classList.remove("unaffordable")
		document.getElementById("infinity-button").innerHTML =
		`Go Infinite for<br>
		${format(getInfinityPointIncome(), 0, false)}<br>
		Infinity Points`;
	} else {
		document.getElementById("infinity-button").classList.add("unaffordable")
		document.getElementById("infinity-button").classList.remove("affordable")
		document.getElementById("infinity-button").innerHTML =
		`Reach Infinite Matter<br>
		(1.8e308)`;
	}
	//infinity upgrade 1
	let element = document.getElementById("infinity-upgrade-1")
	if (game.infinity.infinityUpgrades.upgrade1 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Gain a multiplier to<br>
			all Dimensions based<br>
			on total generated Matter<br>
			Currently: ×${format(Decimal.max(Decimal.max(game.totalGeneratedMatter, new Decimal(1)).log(1e10).add(1), new Decimal(1)), 2)}`;
	} else if (game.infinity.infinityPoints.gte(1)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Gain a multiplier to<br>
			all Dimensions based<br>
			on total generated Matter<br>
			Cost: 1 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Gain a multiplier to<br>
			all Dimensions based<br>
			on total generated Matter<br>
			Cost: 1 IP`;
	}
	//infinity upgrade 2
	element = document.getElementById("infinity-upgrade-2")
	if (game.infinity.infinityUpgrades.upgrade2 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Increase the multiplier<br>
			from Dimension Boosts<br>
			by ×1.25`;
	} else if (game.infinity.infinityPoints.gte(1)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Increase the multiplier<br>
			from Dimension Boosts<br>
			by ×1.25<br>
			Cost: 1 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Increase the multiplier<br>
			from Dimension Boosts<br>
			by ×1.25<br>
			Cost: 1 IP`;
	}
	//infinity upgrade 3
	element = document.getElementById("infinity-upgrade-3")
	if (game.infinity.infinityUpgrades.upgrade3 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`You gain 10 free<br>
			Tickspeed upgrades`;
	} else if (game.infinity.infinityPoints.gte(1)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`You gain 10 free<br>
			Tickspeed upgrades<br>
			Cost: 1 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`You gain 10 free<br>
			Tickspeed upgrades<br>
			Cost: 1 IP`;
	}
	//infinity upgrade 4
	element = document.getElementById("infinity-upgrade-4")
	if (game.infinity.infinityUpgrades.upgrade4 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`All Galaxies are<br>
			twice as strong`;
	} else if (game.infinity.infinityPoints.gte(1)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`All Galaxies are<br>
			twice as strong<br>
			Cost: 1 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`All Galaxies are<br>
			twice as strong<br>
			Cost: 1 IP`;
	}
	//infinity upgrade 5
	element = document.getElementById("infinity-upgrade-5")
	if (game.infinity.infinityUpgrades.upgrade5 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Gain 10 Dimensions when<br>
			buying them, but ×10<br>
			Dimboost and Galaxy cost`;
	} else if (game.infinity.infinityPoints.gte(5)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Gain 10 Dimensions when<br>
			buying them, but ×10<br>
			Dimboost and Galaxy cost<br>
			Cost: 5 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Gain 10 Dimensions when<br>
			buying them, but ×10<br>
			Dimboost and Galaxy cost<br>
			Cost: 5 IP`;
	}
	//infinity upgrade 6
	element = document.getElementById("infinity-upgrade-6")
	if (game.infinity.infinityUpgrades.upgrade6 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Dimension Boosts<br>
			scale 25% slower`;
	} else if (game.infinity.infinityPoints.gte(15)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Dimension Boosts<br>
			scale 25% slower<br>
			Cost: 15 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Dimension Boosts<br>
			scale 25% slower<br>
			Cost: 15 IP`;
	}
	//infinity upgrade 7
	element = document.getElementById("infinity-upgrade-7")
	if (game.infinity.infinityUpgrades.upgrade7 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Gain an extra 0.2<br>
			Matter Dimensions upgrade<br>
			multiplier`;
	} else if (game.infinity.infinityPoints.gte(25)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Gain an extra 0.2<br>
			Matter Dimensions upgrade<br>
			multiplier<br>
			Cost: 25 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Gain an extra 0.2<br>
			Matter Dimensions upgrade<br>
			multiplier<br>
			Cost: 25 IP`;
	}
	//infinity upgrade 8
	element = document.getElementById("infinity-upgrade-8")
	if (game.infinity.infinityUpgrades.upgrade8 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Dimension Boosts no<br>
			longer reset anything<br>`;
	} else if (game.infinity.infinityPoints.gte(50)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Dimension Boosts no<br>
			longer reset anything<br>
			Cost: 50 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Dimension Boosts no<br>
			longer reset anything<br>
			Cost: 50 IP`;
	}
	//infinity upgrade 9
	element = document.getElementById("infinity-upgrade-9")
	if (game.infinity.infinityUpgrades.upgrade9 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`8th Matter Dimension<br>
			multiplier based on<br>
			Tickspeed Upgrades<br>
			Currently: ×${format(game.tickspeedUpgrades.mul(2).add(1), 2)}`;
	} else if (game.infinity.infinityPoints.gte(1e2)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`8th Matter Dimension<br>
			multiplier based on<br>
			Tickspeed Upgrades<br>
			Cost: 100 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`8th Matter Dimension<br>
			multiplier based on<br>
			Tickspeed Upgrades<br>
			Cost: 100 IP`;
	}
	//infinity upgrade 10
	element = document.getElementById("infinity-upgrade-10")
	if (game.infinity.infinityUpgrades.upgrade10 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Gain a multiplier to<br>
			all Dimensions based on<br>
			8th Matter Dimensions<br>
			Currently: ×${format(game.dimensions.amounts.dim8.div(5).add(1), 2)}`;
	} else if (game.infinity.infinityPoints.gte(250)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Gain a multiplier to<br>
			all Dimensions based on<br>
			8th Matter Dimensions<br>
			Cost: 250 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Gain a multiplier to<br>
			all Dimensions based on<br>
			8th Matter Dimensions<br>
			Cost: 250 IP`;
	}
	//infinity upgrade 11
	element = document.getElementById("infinity-upgrade-11")
	if (game.infinity.infinityUpgrades.upgrade11 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Start with 1 free<br>
			Galaxy`;
	} else if (game.infinity.infinityPoints.gte(500)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Start with 1 free<br>
			Galaxy<br>
			Cost: 500 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Start with 1 free<br>
			Galaxy<br>
			Cost: 500 IP`;
	}
	//infinity upgrade 12
	element = document.getElementById("infinity-upgrade-12")
	if (game.infinity.infinityUpgrades.upgrade12 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`1st Matter Dimension<br>
			gains a multiplier<br>
			based on current IP<br>
			Currently: ×${format(Decimal.max(Decimal.max(game.infinity.infinityPoints, new Decimal(1)).log10().add(1), new Decimal(1)).mul(10), 2)}`;
	} else if (game.infinity.infinityPoints.gte(1e3)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`1st Matter Dimension<br>
			gains a multiplier<br>
			based on current IP<br>
			Cost: 1k IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`1st Matter Dimension<br>
			gains a multiplier<br>
			based on current IP<br>
			Cost: 1k IP`;
	}
	//unlocking break infinity
	if (game.infinity.breakInfinityUpgrades.unlocked == true) {
		document.getElementById("break-infinity-upgrades").classList.remove("locked")
	}
	//breaking infinity
	element = document.getElementById("break-infinity-button")
	if (game.infinity.breakInfinityUpgrades.unlocked == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`INFINITY BROKEN`;
	} else if (game.infinity.infinityUpgrades.upgrade1 == true 
	&& game.infinity.infinityUpgrades.upgrade2 == true 
	&& game.infinity.infinityUpgrades.upgrade3 == true 
	&& game.infinity.infinityUpgrades.upgrade4 == true) {
		element.classList.add("affordable");
		element.classList.remove("unlocked");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`BREAK INFINITY<br>
			Requires: All row<br>
			1 upgrades unlocked`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("unlocked");
		element.innerHTML =
			`BREAK INFINITY<br>
			Requires: All row<br>
			1 upgrades unlocked`;
	}
	//break infinity upgrade 1
	element = document.getElementById("break-infinity-upgrade-1")
	if (game.infinity.breakInfinityUpgrades.upgrade1 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Unlock Continuum<br><br>
			UNLOCKED<br>
			(Check Infinity Tab)`;
	} else if (game.infinity.infinityPoints.gte(10)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Unlock Continuum<br><br>
			Cost: 10 IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Unlock Continuum<br><br>
			Cost: 10 IP`;
	}
	//break infinity upgrade 2
	element = document.getElementById("break-infinity-upgrade-2")
	if (game.infinity.breakInfinityUpgrades.upgrade2 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Unlock Replicanti<br><br>
			UNLOCKED<br>
			(Check Infinity Tab)`;
	} else if (game.infinity.infinityPoints.gte(1e5)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Unlock Replicanti<br><br>
			Cost: 100k IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Unlock Replicanti<br><br>
			Cost: 100k IP`;
	}
	//break infinity upgrade 3
	element = document.getElementById("break-infinity-upgrade-3")
	if (game.infinity.breakInfinityUpgrades.upgrade3 == true) {
		element.classList.add("purchased");
		element.classList.remove("affordable");
		element.classList.remove("unaffordable");
		element.innerHTML =
			`Unlock the Infinity Dimensions<br>
			UNLOCKED<br>
			(Check Dimensions Tab)`;
	} else if (game.infinity.infinityPoints.gte(1e16)) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Unlock the Infinity Dimensions<br>
			Cost: 10Qd IP`;
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
		element.classList.remove("purchased");
		element.innerHTML =
			`Unlock the Infinity Dimensions<br>
			Cost: 10Qd IP`;
	}
	//break infinity upgrade 4
	element = document.getElementById("break-infinity-upgrade-4")
	element.innerHTML =
		`Double Infinity<br>
		Point Gain<br>
		Currently: ×${format(new Decimal(2).pow(game.infinity.breakInfinityUpgrades.upgrade4), 2, false)}<br>
		Cost: ${format(getCostScale(10, 10, game.infinity.breakInfinityUpgrades.upgrade4, 10))} IP`;
	if (game.infinity.infinityPoints.gte(getCostScale(10, 10, game.infinity.breakInfinityUpgrades.upgrade4, 10))) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
	}
	//break infinity upgrade 5
	element = document.getElementById("break-infinity-upgrade-5")
	element.innerHTML =
		`Decrease Pre-Infinity<br>
		Tickspeed Cost Scaling<br>
		Currently: ×${format(game.infinity.breakInfinityUpgrades.upgrade5.div(10).add(1), 2, false)} slower<br>
		Cost: ${format(getCostScale(25, 30, game.infinity.breakInfinityUpgrades.upgrade5, 10))} IP`;
	if (game.infinity.infinityPoints.gte(getCostScale(25, 30, game.infinity.breakInfinityUpgrades.upgrade5, 10))) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
	}
	//break infinity upgrade 6
	element = document.getElementById("break-infinity-upgrade-6")
	element.innerHTML =
		`Decrease Pre-Infinity<br>
		Dimension Cost Scaling<br>
		Currently: ×${format(game.infinity.breakInfinityUpgrades.upgrade6.div(10).add(1), 2, false)} slower<br>
		Cost: ${format(getCostScale(50, 20, game.infinity.breakInfinityUpgrades.upgrade6, 10))} IP`;
	if (game.infinity.infinityPoints.gte(getCostScale(50, 20, game.infinity.breakInfinityUpgrades.upgrade6, 10))) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
	}
	//break infinity upgrade 7
	element = document.getElementById("break-infinity-upgrade-7")
	element.innerHTML =
		`Gain free Dimension<br>
		Boosts<br>
		Currently: +${format(game.infinity.breakInfinityUpgrades.upgrade7)}<br>
		Cost: ${format(getCostScale(100, 5, game.infinity.breakInfinityUpgrades.upgrade7, 10))} IP`;
	if (game.infinity.infinityPoints.gte(getCostScale(100, 5, game.infinity.breakInfinityUpgrades.upgrade7, 10))) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
	}
}