function updateContinuumUI() {
	//unlocking continuum
	if (game.infinity.breakInfinityUpgrades.upgrade1 == true) {
		document.getElementById("open-continuum-tab").classList.remove("locked")
	}
	//continuum upgrade
	let btn = document.getElementById("continuum-upgrade-button");
	btn.innerHTML =
		`Upgrade your<br> 
		Continuum Level (${format(game.continuumLevel, 0)})<br><br>
		Cost: ${format(getContinuumUpgradeCost())} Matter`;
	if (game.matter.gte(getContinuumUpgradeCost())) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//dim1
	document.getElementById("continuum-dimension-1-multiplier").textContent =
		`Continuum Multiplier: +${format(getContinuumMultiplier(0).sub(1).mul(100), 0)}%`;
	btn = document.getElementById("continuum-dimension-1-activate");
	if (game.continuum.dimensions.dim1 == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//dim2
	document.getElementById("continuum-dimension-2-multiplier").textContent =
		`Continuum Multiplier: +${format(getContinuumMultiplier(1).sub(1).mul(100), 0)}%`;
	btn = document.getElementById("continuum-dimension-2-activate");
	if (game.continuum.dimensions.dim2 == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//dim3
	document.getElementById("continuum-dimension-3-multiplier").textContent =
		`Continuum Multiplier: +${format(getContinuumMultiplier(3).sub(1).mul(100), 0)}%`;
	btn = document.getElementById("continuum-dimension-3-activate");
	if (game.continuum.dimensions.dim3 == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//dim4
	document.getElementById("continuum-dimension-4-multiplier").textContent =
		`Continuum Multiplier: +${format(getContinuumMultiplier(6).sub(1).mul(100), 0)}%`;
	btn = document.getElementById("continuum-dimension-4-activate");
	if (game.continuum.dimensions.dim4 == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//dim5
	document.getElementById("continuum-dimension-5-multiplier").textContent =
		`Continuum Multiplier: +${format(getContinuumMultiplier(10).sub(1).mul(100), 0)}%`;
	btn = document.getElementById("continuum-dimension-5-activate");
	if (game.continuum.dimensions.dim5 == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//dim6
	document.getElementById("continuum-dimension-6-multiplier").textContent =
		`Continuum Multiplier: +${format(getContinuumMultiplier(15).sub(1).mul(100), 0)}%`;
	btn = document.getElementById("continuum-dimension-6-activate");
	if (game.continuum.dimensions.dim6 == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//dim7
	document.getElementById("continuum-dimension-7-multiplier").textContent =
		`Continuum Multiplier: +${format(getContinuumMultiplier(21).sub(1).mul(100), 0)}%`;
	btn = document.getElementById("continuum-dimension-7-activate");
	if (game.continuum.dimensions.dim7 == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//dim8
	document.getElementById("continuum-dimension-8-multiplier").textContent =
		`Continuum Multiplier: +${format(getContinuumMultiplier(28).sub(1).mul(100), 0)}%`;
	btn = document.getElementById("continuum-dimension-8-activate");
	if (game.continuum.dimensions.dim8 == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//tickspeed
	document.getElementById("continuum-tickspeed-multiplier").textContent =
		`Continuum Multiplier: +${format(getContinuumMultiplier(36).sub(1).mul(100), 0)}%`;
	btn = document.getElementById("continuum-tickspeed-activate");
	if (game.continuum.tickspeed == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//dimboost
	document.getElementById("continuum-dimension-boost-multiplier").textContent =
		`Continuum Multiplier: +0%`;
	btn = document.getElementById("continuum-dimension-boost-activate");
	if (game.continuum.dimboosts == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//galaxy
	document.getElementById("continuum-galaxy-multiplier").textContent =
		`Continuum Multiplier: +0%`;
	btn = document.getElementById("continuum-galaxy-activate");
	if (game.continuum.galaxies == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
	//break infinity
	document.getElementById("continuum-break-infinity-multiplier").textContent =
		`Continuum Multiplier: +0%`;
	btn = document.getElementById("continuum-break-infinity-activate");
	if (game.continuum.breakInfinityUpgrades == true) {
		btn.classList.add("affordable");
		btn.classList.remove("unaffordable");
	} else {
		btn.classList.add("unaffordable");
		btn.classList.remove("affordable");
	}
}