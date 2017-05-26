
// Write a Roman numeral converter. The program should be passed an integer and return the correct Roman numeral.

function romanNumeralConversion(num){
var digits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanNums = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
var result = '';
	for (let i = 0; i < digits.length; i++){
		while(num % digits[i] < num){
			result += romanNums[i];
			num -= digits[i];
		}
	}
	console.log(result);
}

romanNumeralConversion(109);

// As a bonus, please do the reverse. Accept a roman numeral, and convert it to an integer

function numberConversion(roman){
var digits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
var romanNums = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
var result = 0;
	for (let i = 0; i < digits.length; i++){
		console.log(roman.indexOf(romanNums[i]))
		while(roman.indexOf(romanNums[i]) === 0){
			result += digits[i];
			roman = roman.replace(romanNums[i], '');
		}
	}
	console.log(result);
}

numberConversion('XIX');

// January 1, 1701 was a Saturday. How many Saturdays were on the first of the month between 1701 and 1800?

var date = new Date(Date.parse('January 1, 1701'));
var dateInMS = Date.parse(date);
var numberOfWeeks = 1;
var firstOfMonth = 1;
var newDate = new Date(dateInMS);

while(newDate.getFullYear()<1800){
    newDate = new Date(dateInMS + numberOfWeeks * 604800000);
    //console.log(newDate.getDate());
    if(newDate.getDate() == 1){
        firstOfMonth++;
    }
    numberOfWeeks++;
}
console.log(firstOfMonth);
console.log(newDate);