// -Bubble Sort

// -O(N^2)
// 	-start at the first element, and compare it to the one nex to it
// 	-If the left is bigger than the right switch the two
// 	-Go to the next one and repeat
// 	-Do the entire list, n times, and the list must be sorted

// var unsorted = [5,2,6,3,1,3];
	// -**First time through the array the largest number will always be moved to the end of the list**
		// -In ex. 6 will always switch with the number to its right bc it will always be larger
	// -**Second time through the array the TWO largest numbers will always be sorted**
	// -**Third time the final THREE will be sorted
	// -**Etc.
	// -Because the largest numbers "bubble" up to the end of the list each time through this method is called bubble sort
	// -Only have to loop through the entire array - the number of time already through
		// 1st iteration = loop whole array 
		// 2nd iteration = loop whole array - 1
		// 3nd iteration = loop whole array - 2
		// 4nd iteration = loop whole array - 3
	// -Worst case scenario (list in reverse order) we must go through the array, array.length times

	// -TO OPTIMIZE: set bool to false at the beginning of the loop, if switch is made change bool to true
	// , if bool is still false at the end of the loop then no changes were made and the list must be sorted,
	// STOP looping


var partSortList2 = [1,3,3,4,7,9,8,10,11,54,3,6,8,234,565,654];
var the_list = [1,3,654,3,4,7,9,8,565,10,11,54,3,6,234,8];
var count = 0;
function bubbleSort(array){
	for (let i = array.length; i > 0; i--){
		var bool = false;
		for (let j = 0; j < array.length; j++){
			var temp = 0;
			if (array[j] > array[j+1]){
				temp = array[j];
				array[j] = array[j+1];
				array[j+1] = temp;
				bool = true;
			}
		}
		if (bool == false){
			break;
		}else{
			count++;
		}
	}
	return array
}
console.log(count)
console.log(bubbleSort(partSortList2));
console.log(count)



////////////////////////////////////////////////
/////////////// MERGE SORT ////////////////////
//////////////////////////////////////////////

var the_list = [1,3,654,3,4,7,9,8,565,10,11,54,3,6,234,8];

function breakDown(array){
	if (array.length < 2){
		return array
	}

	var mid = parseInt(array.length / 2);
	var left = array.slice(0,mid);
	var right = array.slice(mid,array.length);

	return mergeSort(breakDown(left),breakDown(right))
}

function mergeSort(left,right){
	var result = [];

	while (left.length && right.length){
		if (left[0] > right[0]){
			result.push(right.shift());
		}else{
			result.push(left.shift());
		}
	}

	while (left.length){
		result.push(left.shift());
	}

	while (right.length){
		result.push(right.shift());
	}

	return result
}

console.log(breakDown(the_list));


















