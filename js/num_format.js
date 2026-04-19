function format(num, digits = 2, trimNumber = true) {
	num = new Decimal(num);

	if (num.gte("1.8e308")) {
		if (game.infinity.breakInfinityUpgrades.unlocked == false) {
			return "∞";
		}
	}
	if (num.gte("1e1.8e308")) {
		if (game.eternity.breakEternityUpgrades.unlocked == false) {
			return "∞²";
		}
	}
	if (num.gte("1e1e1.8e308")) {
		if (game.reality.breakRealityUpgrades.unlocked == false) {
			return "∞³";
		}
	}

	function trim(str) {
		if (trimNumber == true) {
			return str.replace(/\.0+$|(\.\d*[1-9])0+$/, "$1");
		}
		return str
	}

	if (num.lt(1000)) {
		return trim(num.toFixed(digits));
	}

	const suffixes = [
		"k", "M", "B", "T", "Qa",
		"Qn", "Sx", "Sp", "Oc", "No"
	];

	let exponent = num.log10().floor();
	let tier = exponent.div(3).floor().sub(1); // 1e3 = tier 0

	if (tier.gte(0) && tier.lt(suffixes.length)) {
		let scaled = num.div(Decimal.pow(10, tier.add(1).mul(3)));

		if (scaled.gte(999.95)) {
			scaled = scaled.div(1000);
			tier = tier.add(1);
		}

		if (tier.lt(suffixes.length)) {
			return trim(scaled.toFixed(2)) + suffixes[tier.toNumber()];
		}
	}

	let mantissa = num.div(Decimal.pow(10, exponent));

	if (mantissa.gte(9.9995)) {
		mantissa = new Decimal(1);
		exponent = exponent.add(1);
	}

	if (exponent.lt(1e9)) {
		return trim(mantissa.toFixed(2)) + "e" + exponent.toFixed(0);
	}

	let expExponent = exponent.log10().floor();
	let expMantissa = exponent.div(Decimal.pow(10, expExponent));

	if (expMantissa.gte(9.9995)) {
		expMantissa = new Decimal(1);
		expExponent = expExponent.add(1);
	}

	return trim(mantissa.toFixed(2)) + "e" +
		   trim(expMantissa.toFixed(2)) + "e" +
		   expExponent.toFixed(0);
}

function formatCommas(num, digits = 0) {
    num = Number(num);

    if (Number.isInteger(num)) {
        return num.toLocaleString("en-US");
    }

    return num.toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: digits
    });
}