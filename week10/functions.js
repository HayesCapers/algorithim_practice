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
		var poop = this.sortArray(array);
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
		var counter = 0;
		var tripCount = 0;
		var firstPair;
		for (let i = 0; i < testArray.length; i++){
			for (let j = 0; j < testArray.length; j++){
				if (testArray[i] == testArray[j]){
					counter++;
				}
				if (counter == 3){
					tripCount++;
					firstPair = testArray[i];
					continue;
				}
			}
			counter = 0
		}
		if(tripCount == 0){
			return false;
		}
		while(testArray.indexOf(firstPair) !== -1){
			for (let i = 0; i < testArray.length; i++){
				if(testArray[i] == firstPair){
					testArray.splice(i,1);
				}
			}
		}
		return this.checkDupes(testArray,2);
	},

	twoPair: function(array) {
		var testArray = array.slice(0);
		var counter = 0;
		var pairCount = 0;
		var firstPair;
		for (let i = 0; i < testArray.length; i++){
			for (let j = 0; j < testArray.length; j++){
				if (testArray[i] == testArray[j]){
					counter++;
				}
				if (counter == 2){
					pairCount++;
					firstPair = testArray[i];
					continue;
				}
			}
			counter = 0
		}
		while(testArray.indexOf(firstPair) !== -1){
			for (let i = 0; i < testArray.length; i++){
				if(testArray[i] == firstPair){
					testArray.splice(i,1);
				}
			}
		}
		return this.checkDupes(testArray,2);
	},

	checkDupes: function(array,numOfDupes) {
		var counter = 0;
		for (let i = 0; i < array.length; i++){
			for (let j = 0; j < array.length; j++){
				if (array[i] == array[j]){
					counter++;
				}
				if (counter == numOfDupes){
					return true
				}
			}
			counter = 0
		}
		return false
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

	findRank: function(array,high) {
		var valueArray = this.cardValueConversion(array);
		var suitArray = this.cardSuitConversion(array);
		var rank = 1;
		if(this.straight(valueArray) && this.flush(suitArray) && high == 14){
			rank = 10;
		}else if (this.straight(valueArray) && this.flush(suitArray)){
			rank = 9;
		}else if(this.checkDupes(valueArray,4)){
			rank = 8;
		}else if(this.fullHouse(valueArray)){
			rank = 7;
		}else if(this.flush(suitArray)){
			rank = 6;
		}else if(this.straight(valueArray)){
			rank = 5;
		}else if(this.checkDupes(valueArray,3)){
			rank = 4;
		}else if(this.twoPair(valueArray)){
			rank = 3;
		}else if(this.checkDupes(valueArray,2)){
			rank = 2;
		}
		return rank
	}
}

module.exports = functions