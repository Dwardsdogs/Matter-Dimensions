function updateTimeDimensionsUI() {
	let dims = game.eternity.timeDimensions;

	//unlocking time dims
	if (game.eternity.eternities.gte(1)) {
		document.getElementById("open-time-dimensions-tab").classList.remove("locked")
	}
	document.getElementById("time-dimensions-time-shard-amount").innerHTML =
	`You have gained ${format(Decimal.max(game.eternity.timeShards, new Decimal(0.99)).log(1.33).add(1).floor())} Tickspeed upgrades from ${format(game.eternity.timeShards, 1, false)} Time Shards.<br>
	Next Tickspeed upgrade at ${format(new Decimal(1.33).pow(Decimal.max(game.eternity.timeShards, new Decimal(0.99)).log(1.33).ceil()), 1, false)}, increasing by ×1.33 per Tickspeed Upgrade gained.`;
	//time dimensions
	createDimensionUI(dims, "time", 1, "1st Time Dimension", game.eternity.eternityPoints, "EP")
	createDimensionUI(dims, "time", 2, "2nd Time Dimension", game.eternity.eternityPoints, "EP")
	createDimensionUI(dims, "time", 3, "3rd Time Dimension", game.eternity.eternityPoints, "EP")
	createDimensionUI(dims, "time", 4, "4th Time Dimension", game.eternity.eternityPoints, "EP")
	createDimensionUI(dims, "time", 5, "5th Time Dimension", game.eternity.eternityPoints, "EP")
	createDimensionUI(dims, "time", 6, "6th Time Dimension", game.eternity.eternityPoints, "EP")
	createDimensionUI(dims, "time", 7, "7th Time Dimension", game.eternity.eternityPoints, "EP")
	createDimensionUI(dims, "time", 8, "8th Time Dimension", game.eternity.eternityPoints, "EP")
}