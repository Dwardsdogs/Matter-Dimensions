const saveKey = "gameSave";
const gameVersion = 1;
let autoSaveInterval = 5000;

let game = {
	version: 1,

	totalGeneratedMatter: new Decimal(1),
	matter: new Decimal(1),

	dimensions: {
		levels: {
			dim1: new Decimal(0),
			dim2: new Decimal(0),
			dim3: new Decimal(0),
			dim4: new Decimal(0),
			dim5: new Decimal(0),
			dim6: new Decimal(0),
			dim7: new Decimal(0),
			dim8: new Decimal(0)
		},
		amounts: {
			dim1: new Decimal(0),
			dim2: new Decimal(0),
			dim3: new Decimal(0),
			dim4: new Decimal(0),
			dim5: new Decimal(0),
			dim6: new Decimal(0),
			dim7: new Decimal(0),
			dim8: new Decimal(0)
		}
	},

	tickspeedUpgrades: new Decimal(0),
	dimensionBoosts: new Decimal(0),
	matterGalaxies: new Decimal(0),

	continuum: {
		dimensions: {
			dim1: false,
			dim2: false,
			dim3: false,
			dim4: false,
			dim5: false,
			dim6: false,
			dim7: false,
			dim8: false
		},
		tickspeed: false,
		dimboosts: false,
		galaxies: false,
		generators: {
			tickspeed: {
				tickspeedGain: false,
				tickspeedGain2: false,
				tickspeedGain3: false,
				tickspeedDecay: false,
				tickspeedStrength: false
			}
		},
		doubleInfinityPowerUpgrade: false,
		breakInfinityUpgrades: false,
		infinityDimensions: {
			dim1: false,
			dim2: false,
			dim3: false,
			dim4: false,
			dim5: false,
			dim6: false,
			dim7: false,
			dim8: false
		},
		timeDimensions: {
			dim1: false,
			dim2: false,
			dim3: false,
			dim4: false,
			dim5: false,
			dim6: false,
			dim7: false,
			dim8: false
		}
	},

	continuumLevel: new Decimal(0),

	infinity: {
		totalGeneratedIP: new Decimal(0),
		infinityPoints: new Decimal(0),
		unlocked: false,

		doubleInfinityPowerUpgrade: new Decimal(0),
		infinityPower: new Decimal(1),
		infinityDimensions: {
			levels: {
				dim1: new Decimal(0),
				dim2: new Decimal(0),
				dim3: new Decimal(0),
				dim4: new Decimal(0),
				dim5: new Decimal(0),
				dim6: new Decimal(0),
				dim7: new Decimal(0),
				dim8: new Decimal(0)
			},
			amounts: {
				dim1: new Decimal(0),
				dim2: new Decimal(0),
				dim3: new Decimal(0),
				dim4: new Decimal(0),
				dim5: new Decimal(0),
				dim6: new Decimal(0),
				dim7: new Decimal(0),
				dim8: new Decimal(0)
			}
		},

		replicanti: {
			amount: new Decimal(1),
			syntheticGalaxies: new Decimal(0),
			upgrades: {
				upgrade1: new Decimal(0),
				upgrade2: new Decimal(0)
			}
		},

		infinityUpgrades: {
			upgrade1: false,
			upgrade2: false,
			upgrade3: false,
			upgrade4: false,
			upgrade5: false,
			upgrade6: false,
			upgrade7: false,
			upgrade8: false,
			upgrade9: false,
			upgrade10: false,
			upgrade11: false,
			upgrade12: false
		},
		breakInfinityUpgrades: {
			unlocked: false,
			upgrade1: false,
			upgrade2: false,
			upgrade3: false,
			upgrade4: new Decimal(0),
			upgrade5: new Decimal(0),
			upgrade6: new Decimal(0),
			upgrade7: new Decimal(0),
			upgrade8: false
		}
	},

	eternity: {
		unlocked: false,
		eternityPoints: new Decimal(0),
		totalGeneratedEP: new Decimal(0),
		eternities: new Decimal(0),
		
		breakEternityUpgrades: {
			unlocked: false
		},


		timeShards: new Decimal(0),
		timeDimensions: {
			levels: {
				dim1: new Decimal(0),
				dim2: new Decimal(0),
				dim3: new Decimal(0),
				dim4: new Decimal(0),
				dim5: new Decimal(0),
				dim6: new Decimal(0),
				dim7: new Decimal(0),
				dim8: new Decimal(0)
			},
			amounts: {
				dim1: new Decimal(0),
				dim2: new Decimal(0),
				dim3: new Decimal(0),
				dim4: new Decimal(0),
				dim5: new Decimal(0),
				dim6: new Decimal(0),
				dim7: new Decimal(0),
				dim8: new Decimal(0)
			}
		},
	},

	reality: {
		unlocked: false,
		breakRealityUpgrades: {
			unlocked: false
		}
	},

	generators: {
		tickspeedGeneratorUpgrades: {
			doubleGain: new Decimal(0),
			doubleGain2: new Decimal(0),
			addGain: new Decimal(0),
			decayWeakness: new Decimal(0),
			tickspeedStrength: new Decimal(0)
		},
		dimensionBoostGeneratorUpgrades: {},
		galaxyGeneratorUpgrades: {}
	},
};

Decimal.prototype.toJSON = function() {
    return this.toString();
};

function save() {
    localStorage.setItem(saveKey, JSON.stringify(game));
}

function load() {
    let savedData = localStorage.getItem(saveKey);
    if (!savedData) return;
    try {
        let parsedData = JSON.parse(savedData);
        game = decimalize(parsedData, game);
    } catch (e) {
        console.error("Failed to load save:", e);
    }
}

/**
 * Recursively turns strings back into Decimals.
 * @param {Object} data - The raw data from JSON.parse
 * @param {Object} template - Your default 'game' object to preserve structure/booleans
 */

function decimalize(data, template) {
    if (template instanceof Decimal) {
        return new Decimal(data);
    }
    if (typeof data === 'object' && data !== null && !Array.isArray(data)) {
        let newObj = {};
        for (let key in data) {
            if (template.hasOwnProperty(key)) {
                newObj[key] = decimalize(data[key], template[key]);
            }
        }
        for (let key in template) {
            if (!newObj.hasOwnProperty(key)) {
                newObj[key] = template[key];
            }
        }
        return newObj;
    }
    return data;
}

load()
setInterval(save, 5000)

function resetVariables(layer) {
	if (layer >= 4) {
		if (game.eternity.eternities.lt(10)) {
			game.continuum = {
				dimensions: {
					dim1: false,
					dim2: false,
					dim3: false,
					dim4: false,
					dim5: false,
					dim6: false,
					dim7: false,
					dim8: false
				},
				tickspeed: false,
				dimboosts: false,
				galaxies: false,
				generators: {
					tickspeed: {
						tickspeedGain: false,
						tickspeedGain2: false,
						tickspeedGain3: false,
						tickspeedDecay: false,
						tickspeedStrength: false
					}
				},
				doubleInfinityPowerUpgrade: false,
				breakInfinityUpgrades: false,
				infinityDimensions: {
					dim1: false,
					dim2: false,
					dim3: false,
					dim4: false,
					dim5: false,
					dim6: false,
					dim7: false,
					dim8: false
				},
				timeDimensions: {
					dim1: false,
					dim2: false,
					dim3: false,
					dim4: false,
					dim5: false,
					dim6: false,
					dim7: false,
					dim8: false
				}
			};
			game.continuumLevel = new Decimal(0);
		}

		game.infinity.totalGeneratedIP = new Decimal(0)
		game.infinity.infinityPoints = new Decimal(0)
		game.infinity.unlocked = false
		game.infinity.doubleInfinityPowerUpgrade = new Decimal(0)
		game.infinity.infinityPower = new Decimal(1)
		game.infinity.infinityDimensions = {
			levels: {
				dim1: new Decimal(0),
				dim2: new Decimal(0),
				dim3: new Decimal(0),
				dim4: new Decimal(0),
				dim5: new Decimal(0),
				dim6: new Decimal(0),
				dim7: new Decimal(0),
				dim8: new Decimal(0)
			},
			amounts: {
				dim1: new Decimal(0),
				dim2: new Decimal(0),
				dim3: new Decimal(0),
				dim4: new Decimal(0),
				dim5: new Decimal(0),
				dim6: new Decimal(0),
				dim7: new Decimal(0),
				dim8: new Decimal(0)
			}
		}
		game.infinity.replicanti = {
			amount: new Decimal(1),
			syntheticGalaxies: new Decimal(0),
			upgrades: {
				upgrade1: new Decimal(0),
				upgrade2: new Decimal(0)
			}
		}
		if (game.eternity.eternities.lt(2)) {
			game.infinity.infinityUpgrades.upgrade1 = false
			game.infinity.infinityUpgrades.upgrade2 = false
			game.infinity.infinityUpgrades.upgrade3 = false
			game.infinity.infinityUpgrades.upgrade4 = false
		}
		if (game.eternity.eternities.lt(3)) {
			game.infinity.infinityUpgrades.upgrade5 = false
			game.infinity.infinityUpgrades.upgrade6 = false
			game.infinity.infinityUpgrades.upgrade7 = false
			game.infinity.infinityUpgrades.upgrade8 = false
		}
		if (game.eternity.eternities.lt(4)) {
			game.infinity.infinityUpgrades.upgrade9 = false
			game.infinity.infinityUpgrades.upgrade10 = false
			game.infinity.infinityUpgrades.upgrade11 = false
			game.infinity.infinityUpgrades.upgrade12 = false
		}
		if (game.eternity.eternities.lt(5)) {
			game.infinity.breakInfinityUpgrades.unlocked = false
		}
		if (game.eternity.eternities.lt(7)) {
			game.infinity.breakInfinityUpgrades.upgrade1 = false
			game.infinity.breakInfinityUpgrades.upgrade2 = false
			game.infinity.breakInfinityUpgrades.upgrade3 = false
			game.infinity.breakInfinityUpgrades.upgrade8 = false
		}
		game.infinity.breakInfinityUpgrades.upgrade4 = new Decimal(0)
		game.infinity.breakInfinityUpgrades.upgrade5 = new Decimal(0)
		game.infinity.breakInfinityUpgrades.upgrade6 = new Decimal(0)
		game.infinity.breakInfinityUpgrades.upgrade7 = new Decimal(0)
	}
	if (layer >= 3) {
		game.matterGalaxies = new Decimal(0);
	}
	if (layer >= 2) {
		game.dimensionBoosts = new Decimal(0);
	}
	if (layer >= 1) {
		game.dimensions = {
			levels: {
				dim1: new Decimal(0),
				dim2: new Decimal(0),
				dim3: new Decimal(0),
				dim4: new Decimal(0),
				dim5: new Decimal(0),
				dim6: new Decimal(0),
				dim7: new Decimal(0),
				dim8: new Decimal(0)
			},
			amounts: {
				dim1: new Decimal(0),
				dim2: new Decimal(0),
				dim3: new Decimal(0),
				dim4: new Decimal(0),
				dim5: new Decimal(0),
				dim6: new Decimal(0),
				dim7: new Decimal(0),
				dim8: new Decimal(0)
			}
		};
		game.matter = new Decimal(1);
		game.totalGeneratedMatter = new Decimal(1);
		game.tickspeedUpgrades = new Decimal(0);
	}
}