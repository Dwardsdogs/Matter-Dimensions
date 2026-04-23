function updateEternityUI() {
	//unlocking eternity
	if (game.eternity.unlocked == true) {
		document.getElementById("eternity-tab-group").classList.remove("locked")
	} else if (game.infinity.infinityPoints.gte(new Decimal("1.8e308"))) {
		game.eternity.unlocked = true;
	} else {
		document.getElementById("eternity-tab-group").classList.add("locked")
	}
	//eternity button
	if (game.infinity.infinityPoints.gte(new Decimal("1.8e308"))) {
		document.getElementById("eternity-button").classList.add("affordable")
		document.getElementById("eternity-button").classList.remove("unaffordable")
		document.getElementById("eternity-button").innerHTML =
		`Become Eternal for<br>
		${format(getEternityPointIncome(), 0, false)}<br>
		Eternity Points`;
	} else {
		document.getElementById("eternity-button").classList.add("unaffordable")
		document.getElementById("eternity-button").classList.remove("affordable")
		document.getElementById("eternity-button").innerHTML =
		`Reach Infinite IP<br>
		(1.8e308)`;
	}
	if (game.eternity.eternities.gte(1)) {
		document.getElementById("eternity-milestone-1").classList.add("unlocked")
	}
	if (game.eternity.eternities.gte(2)) {
		document.getElementById("eternity-milestone-2").classList.add("unlocked")
	}
	if (game.eternity.eternities.gte(3)) {
		document.getElementById("eternity-milestone-3").classList.add("unlocked")
	}
	if (game.eternity.eternities.gte(4)) {
		document.getElementById("eternity-milestone-4").classList.add("unlocked")
	}
	if (game.eternity.eternities.gte(5)) {
		document.getElementById("eternity-milestone-5").classList.add("unlocked")
	}
	if (game.eternity.eternities.gte(7)) {
		document.getElementById("eternity-milestone-6").classList.add("unlocked")
	}
	if (game.eternity.eternities.gte(10)) {
		document.getElementById("eternity-milestone-7").classList.add("unlocked")
	}
	if (game.eternity.eternities.gte(15)) {
		document.getElementById("eternity-milestone-8").classList.add("unlocked")
	}
	if (game.eternity.eternities.gte(20)) {
		document.getElementById("eternity-milestone-9").classList.add("unlocked")
	}
	if (game.eternity.eternities.gte(25)) {
		document.getElementById("eternity-milestone-10").classList.add("unlocked")
	}
	if (game.eternity.eternities.gte(35)) {
		document.getElementById("eternity-milestone-11").classList.add("unlocked")
	}
}