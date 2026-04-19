function updateReplicantiUI() {
	//unlocking replicanti
	if (game.infinity.breakInfinityUpgrades.upgrade2 == true) {
		document.getElementById("open-replicanti-tab").classList.remove("locked")
	}
	
	document.getElementById("replicanti-amount").innerHTML =
		`You have ${format(game.infinity.replicanti.amount, 0)} Replicanti<br>
		<span style="font-size: 0.5em;">
			Replication speed is divided by 2^(log10(replicanti)/1000)<br>
			Multiplying all Dimensions by ×${format(Decimal.min(game.infinity.replicanti.amount, new Decimal("1.8e308")))}
		</span>`;
	document.getElementById("synthetic-galaxy-amount").innerHTML =
		`You have ${format(game.infinity.replicanti.syntheticGalaxies, 0)} Synthetic Galaxies`;
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