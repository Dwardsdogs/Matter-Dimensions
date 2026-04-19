function updateGeneratorUI() {

	document.getElementById("generator-tickspeed-amount").innerHTML =
		`You have a total of ${format(game.tickspeedUpgrades, 0)} Tickspeed Upgrades <span style="color: limegreen;">+${format(getTickspeedGeneratorMultiplier("all"), 2)}/s</span><br>
		Tickspeed Decay is dividing Tickspeed generation by ${format(getTickspeedGeneratorDecay(), 2)}`;

	//tickspeed upgrade 1
	let btn = document.getElementById("generator-tickspeed-gain-upgrade");
	if (game.continuum.generators.tickspeed.tickspeedGain == true) {
		btn.classList.add("continuum");
		btn.classList.remove("unaffordable");
		btn.classList.remove("affordable");
		btn.innerHTML =
			`Double Tickspeed<br>
			generation speed<br>
			Currently: x${format(getTickspeedGeneratorMultiplier("gainUpgrade"))}<br>
			${format(game.generators.tickspeedGeneratorUpgrades.doubleGain)} Continuum`;
	} else {
		btn.innerHTML =
			`Double Tickspeed<br>
			generation speed<br>
			Currently: x${format(getTickspeedGeneratorMultiplier("gainUpgrade"))}<br>
			Cost: ${format(getTickspeedGeneratorCost("gain"))} TS Upgrades`;
		if (game.tickspeedUpgrades.gte(getTickspeedGeneratorCost("gain"))) {
			btn.classList.add("affordable");
			btn.classList.remove("unaffordable");
			btn.classList.remove("continuum");
		} else {
			btn.classList.add("unaffordable");
			btn.classList.remove("affordable");
			btn.classList.remove("continuum");
		}
	}
	//tickspeed upgrade 2
	btn = document.getElementById("generator-tickspeed-gain2-upgrade");
	if (game.continuum.generators.tickspeed.tickspeedGain2 == true) {
		btn.classList.add("continuum");
		btn.classList.remove("unaffordable");
		btn.classList.remove("affordable");
		btn.innerHTML =
			`Double Tickspeed<br>
			generation speed<br>
			Currently: x${format(getTickspeedGeneratorMultiplier("gain2Upgrade"))}<br>
			${format(game.generators.tickspeedGeneratorUpgrades.doubleGain2)} Continuum`;
	} else {
		btn.innerHTML =
			`Double Tickspeed<br>
			generation speed<br>
			Currently: x${format(getTickspeedGeneratorMultiplier("gain2Upgrade"))}<br>
			Cost: ${format(getTickspeedGeneratorCost("gain2"))} Matter`;
		if (game.matter.gte(getTickspeedGeneratorCost("gain2"))) {
			btn.classList.add("affordable");
			btn.classList.remove("unaffordable");
			btn.classList.remove("continuum");
		} else {
			btn.classList.add("unaffordable");
			btn.classList.remove("affordable");
			btn.classList.remove("continuum");
		}
	}
	//tickspeed upgrade 3
	btn = document.getElementById("generator-tickspeed-gain3-upgrade");
	if (game.continuum.generators.tickspeed.tickspeedGain3 == true) {
		btn.classList.add("continuum");
		btn.classList.remove("unaffordable");
		btn.classList.remove("affordable");
		btn.innerHTML =
			`Increase Tickspeed<br>
			generation speed<br>
			Currently: x${format(getTickspeedGeneratorMultiplier("gain3Upgrade"))}<br>
			${format(game.generators.tickspeedGeneratorUpgrades.addGain3)} Continuum`;
	} else {
		btn.innerHTML =
			`Increase Tickspeed<br>
			generation speed<br>
			Currently: x${format(getTickspeedGeneratorMultiplier("gain3Upgrade"))}<br>
			Cost: ${format(getTickspeedGeneratorCost("gain3"))} TS Upgrades`;
		if (game.tickspeedUpgrades.gte(getTickspeedGeneratorCost("gain3"))) {
			btn.classList.add("affordable");
			btn.classList.remove("unaffordable");
			btn.classList.remove("continuum");
		} else {
			btn.classList.add("unaffordable");
			btn.classList.remove("affordable");
			btn.classList.remove("continuum");
		}
	}
	//tickspeed upgrade 4
	btn = document.getElementById("generator-tickspeed-decay-upgrade");
	if (game.continuum.generators.tickspeed.tickspeedDecay == true) {
		btn.classList.add("continuum");
		btn.classList.remove("unaffordable");
		btn.classList.remove("affordable");
		btn.innerHTML =
			`Tickspeed decay is<br>
			10% weaker<br>
			Currently: x${format(new Decimal(0.9).pow(game.generators.tickspeedGeneratorUpgrades.decayWeakness))}<br>
			${format(game.generators.tickspeedGeneratorUpgrades.decayWeakness)} Continuum`;
	} else {
		btn.innerHTML =
			`Tickspeed decay is<br>
			10% weaker<br>
			Currently: x${format(new Decimal(0.9).pow(game.generators.tickspeedGeneratorUpgrades.decayWeakness))}<br>
			Cost: ${format(getTickspeedGeneratorCost("decay"))} TS Upgrades`;
		if (game.tickspeedUpgrades.gte(getTickspeedGeneratorCost("decay"))) {
			btn.classList.add("affordable");
			btn.classList.remove("unaffordable");
			btn.classList.remove("continuum");
		} else {
			btn.classList.add("unaffordable");
			btn.classList.remove("affordable");
			btn.classList.remove("continuum");
		}
	}
	//tickspeed upgrade 5
	btn = document.getElementById("generator-tickspeed-strength-upgrade");
	if (game.continuum.generators.tickspeed.tickspeedStrength == true) {
		btn.classList.add("continuum");
		btn.classList.remove("unaffordable");
		btn.classList.remove("affordable");
		btn.innerHTML =
			`Increase Tickspeed<br>
			strength by 20%<br>
			Currently: x${format(new Decimal(1.2).pow(game.generators.tickspeedGeneratorUpgrades.tickspeedStrength))}<br>
			${format(game.generators.tickspeedGeneratorUpgrades.tickspeedStrength)} Continuum`;
	} else {
		btn.innerHTML =
			`Increase Tickspeed<br>
			strength by 20%<br>
			Currently: x${format(new Decimal(1.2).pow(game.generators.tickspeedGeneratorUpgrades.tickspeedStrength))}<br>
			Cost: ${format(getTickspeedGeneratorCost("strength"))} TS Upgrades`;
		if (game.tickspeedUpgrades.gte(getTickspeedGeneratorCost("strength"))) {
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