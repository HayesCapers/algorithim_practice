

var tBFuncts = {

	tieBreak: function(p1Stats,p2Stats) {
		let rank = p1Stats.rank;
		if (rank == 10){
			return "Wtf!";
		}else if ((rank == 9) || (rank == 6) || (rank == 5) || (rank == 1)){
			return this.highCardArrayTest(p1Stats.handValues,p2Stats.handValues);
		}else if ((rank == 7) || (rank == 4)){
			return this.player1WinsTrips(p1Stats.trips,p2Stats.trips);
		}else if ((rank == 8) || (rank == 3) || (rank == 2)){
			return this.player1WinsPair(p1Stats,p2Stats)
		}
	},

	player1WinsTrips: function(p1Trips,p2Trips){
		if (p1Trips > p2Trips){
			return true;
		}else{
			return false;
		}
	},

	player1WinsPair: function(p1Stats,p2Stats){
		var haveSamePairs = false;
		for (let i = p1Stats.pairs.length; i >= 0; i--){
			if (p1Stats.pairs[i] == p2Stats.pairs[i]){
				continue;
			}else if (p1Stats.pairs[i] > p2Stats.pairs[i]){
				return true;
			}else{
				return false;
			}
		}
		return this.highCardArrayTest(p1Stats.remainingValues,p2Stats.remainingValues);
	},

	highCardArrayTest: function(arrayOfValuesToTest1,arrayOfValuesToTest2){
		var arrayLength = arrayOfValuesToTest1.length;
		for (let i = arrayLength; i >= 0; i--){
			if (arrayOfValuesToTest1[i] == arrayOfValuesToTest2[i]){
				continue;
			}else if (arrayOfValuesToTest1[i] > arrayOfValuesToTest2[i]){
				return true;
			}else{
				return false;
			}
		}
		console.log('you\'re both fucked.')
	}

}

module.exports = tBFuncts;

