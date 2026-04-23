function updateReplicantiUI() {
	//unlocking replicanti
	if (game.infinity.breakInfinityUpgrades.upgrade2 == true) {
		document.getElementById("open-replicanti-tab").classList.remove("locked")
	}

	let replicantiInfinityDimensionsBoost = "";
	if (game.infinity.breakInfinityUpgrades.upgrade8 == true) {
		replicantiInfinityDimensionsBoost = `Multiplying all Infinity Dimensions by ×${format(game.infinity.replicanti.amount.log10().div(100).pow(3).add(1))}`
	}
	document.getElementById("replicanti-amount").innerHTML =
		`You have ${format(game.infinity.replicanti.amount, 0)} Replicanti<br>
		<span style="font-size: 0.5em;">
			Replication speed is divided by 2^(log10(replicanti)/1000)<br>
			Multiplying all Dimensions by ×${format(Decimal.min(game.infinity.replicanti.amount, new Decimal("1.8e308")))}<br>
			${replicantiInfinityDimensionsBoost}
		</span>`;
	if (game.infinity.replicanti.syntheticGalaxies.gte(200)) {
		document.getElementById("synthetic-galaxy-amount").innerHTML =
		`Distorted Synthetic Galaxies (${format(game.infinity.replicanti.syntheticGalaxies)})<br>
		<span style="font-size: 0.5em;">
			Increased Galaxy cost scaling: Quadratic scaling past 20 (unstable)<br>
			Exponential scaling past 150 (distorted)
		</span>`;
	} else if (game.infinity.replicanti.syntheticGalaxies.gte(20)) {
		document.getElementById("synthetic-galaxy-amount").innerHTML =
		`Unstable Synthetic Galaxies (${format(game.infinity.replicanti.syntheticGalaxies)})<br>
		<span style="font-size: 0.5em;">
			Each Galaxy is more expensive past 20 Galaxies
		</span>`;
	} else {
		document.getElementById("synthetic-galaxy-amount").innerHTML =
		`Synthetic Galaxies (${format(game.infinity.replicanti.syntheticGalaxies)})`;
	}
	//synthetic galaxy
	element = document.getElementById("synthetic-galaxy-button")
	element.innerHTML =
		`Divide your Replicanti<br>
		amount by ${format(getSyntheticGalaxyCost(), 0)}<br>
		for a Synthetic Galaxy`;
	if (game.infinity.replicanti.amount.gte(getSyntheticGalaxyCost())) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
	}
	//replicanti upgrade 1
	element = document.getElementById("replicanti-upgrade-1")
	element.innerHTML =
		`Replicanti grows<br>
		20% faster<br>
		Currently: ×${format(new Decimal(1.2).pow(game.infinity.replicanti.upgrades.upgrade1), 2, false)}<br>
		Cost: ${format(getCostScale(1e10, 1e10, game.infinity.replicanti.upgrades.upgrade1))} IP`;
	if (game.infinity.infinityPoints.gte(getCostScale(1e10, 1e10, game.infinity.replicanti.upgrades.upgrade1))) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
	}
	//replicanti upgrade 2
	element = document.getElementById("replicanti-upgrade-2")
	element.innerHTML =
		`Gain a +1 multiplier<br>
		to Replication speed<br>
		Currently: ×${format(game.infinity.replicanti.upgrades.upgrade2.add(1), 2, false)}<br>
		Cost: ${format(getCostScale(2e5, 5, game.infinity.replicanti.upgrades.upgrade2))} IP`;
	if (game.infinity.infinityPoints.gte(getCostScale(2e5, 5, game.infinity.replicanti.upgrades.upgrade2))) {
		element.classList.add("affordable");
		element.classList.remove("unaffordable");
	} else {
		element.classList.add("unaffordable");
		element.classList.remove("affordable");
	}
}