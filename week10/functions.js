var functions = {
	cardValue: ['2','3','4','5','6','7','8','9','T','J','Q','K','A'],

	cardNumberValue: [2,3,4,5,6,7,8,9,10,11,12,13,14],

	flush: function(array) {
		var suit = array[0];
		for (let i = 1; i < array.length; i++){
			if (array[i] != suit){
				return false;
			}
		}
		return true;
	},

	straight: function(array) {
		var poop = [];
		poop.push(this.sortArray(array));
		if ((array.indexOf(14) != -1) && (array.indexOf(2) != -1) && (array.indexOf(3) != -1) && (array.indexOf(4) != -1) && (array.indexOf(5) != -1)){
			var aceIndex = poop.indexOf(14);
			poop.splice(aceIndex,1,1);
		}
		poop = this.sortArray(array);
		for (let i = 0; i < poop.length-1; i++){
			var current = poop[i];
			var next = poop[i+1];
			if(next == current + 1){
				continue
			}else{
				return false
			}
		}
		return true
	},

	sortArray: function(array) {
		var sortedArray = array.sort(function(a, b){return a - b});
		return sortedArray
	},

	fullHouse: function(array) {
		var testArray = array.slice(0);
		var trips = this.checkDupes(testArray,3);
		if(trips.hasHand){
			testArray = this.deletePair(testArray,trips.pairs[0]);
			var secondPair = this.checkDupes(testArray,2);
			secondPair.trips = trips.pairs[0];
			return secondPair;
		}else{
			return trips;
		}	
	},

	twoPair: function(array) {
		var testArray = array.slice(0);
		var firstPair = this.checkDupes(testArray,2);
		if(firstPair.hasHand){
			testArray = this.deletePair(testArray,firstPair.pairs[0])
			var secondPair = this.checkDupes(testArray,2);
			secondPair.pairs.push(firstPair.pairs[0]);
			this.sortArray(secondPair.pairs)
			return secondPair;
		}else{
			return firstPair;
		}	
	},

	checkDupes: function(array,numOfDupes) {
		var stats = {
			hasHand: false,
			pairs: [],
			remainingValues: []
		}
		var counter = 0;
		var highPair = 0;
		for (let i = 0; i < array.length; i++){
			for (let j = 0; j < array.length; j++){
				if (array[i] == array[j]){
					counter++;
					highPair = array[i];
				}
				if (counter == numOfDupes){
					stats.hasHand = true;
					stats.pairs.push(highPair);
					stats.remainingValues = this.sortArray(this.saveRemainingValues(array,highPair))
					return stats
				}
			}
			counter = 0
		}
		return stats
	},

	cardSuitConversion: function(array) {
		var tempArray = [];
		for (let i = 0; i < array.length; i++){
			tempArray.push(array[i].slice(-1)[0]);
		}
		return tempArray;
	},

	cardValueConversion: function(array) {
		var tempArray = [];
		var index;
		for (let i = 0; i < array.length; i++){
			tempArray.push(array[i].slice(0,1))
		}
		for (let i = 0; i < tempArray.length; i++){
			index = this.cardValue.indexOf(tempArray[i])
			// console.log(index)
			tempArray.splice(i,1,this.cardNumberValue[index]);
		}
		return tempArray;
	},

	findHigh: function(array) {
		var maxArray = this.cardValueConversion(array);
		var currentHigh = maxArray[0];
		for (let i = 0; i < maxArray.length; i++){
			if (maxArray[i] > currentHigh){
				currentHigh = maxArray[i]
			}
		}
		return currentHigh
	},

	deletePair: function(array,valueToDelete){
		while(array.indexOf(valueToDelete) !== -1){
			for (let i = 0; i < array.length; i++){
				if(array[i] == valueToDelete){
					array.splice(i,1);
				}
			}
		}
		return array;
	},

	saveRemainingValues(array,pair){
		var arrayToPopulate = []
		for (let i = 0; i < array.length; i++){
			if(array[i] != pair){
				arrayToPopulate.push(array[i]);
			}
		}
		return arrayToPopulate
	},

	findRank: function(array,high) {
		var valueArray = this.sortArray(this.cardValueConversion(array));
		var suitArray = this.cardSuitConversion(array);
		var tempStats;
		var stats = {
			rank: 1,
			handValues: valueArray,
			high: high,
			pairs: [],
			remainingValues: [],
			trips: 0,
			quads: 0
		};
		if(this.straight(valueArray) && this.flush(suitArray) && high == 14){
			stats.rank = 10;
		}else if (this.straight(valueArray) && this.flush(suitArray)){
			stats.rank = 9;
		}else if(this.checkDupes(valueArray,4).hasHand){
			tempStats = this.checkDupes(valueArray,4)
			stats.rank = 8;
			stats.quads = tempStats.pairs[0]
			stats.remainingValues = tempStats.remainingValues
		}else if(this.fullHouse(valueArray).hasHand){
			stats.rank = 7;
			stats.trips = this.fullHouse(valueArray).trips
			stats.pairs.push(this.fullHouse(valueArray).pairs[0])
		}else if(this.flush(suitArray)){
			stats.rank = 6;
		}else if(this.straight(valueArray)){
			stats.rank = 5;
		}else if(this.checkDupes(valueArray,3).hasHand){
			tempStats = this.checkDupes(valueArray,3)
			stats.rank = 4;
			stats.trips = tempStats.pairs
		}else if(this.twoPair(valueArray).hasHand){
			tempStats = this.twoPair(valueArray);
			stats.rank = 3;
			stats.pairs = tempStats.pairs
			stats.remainingValues = tempStats.remainingValues
		}else if(this.checkDupes(valueArray,2).hasHand){
			tempStats = this.checkDupes(valueArray,2)
			stats.rank = 2;
			stats.pairs = tempStats.pairs
			stats.remainingValues = tempStats.remainingValues
		}else{
			stats.rank = 1;
		}
		return stats
	}
}

module.exports = functions








