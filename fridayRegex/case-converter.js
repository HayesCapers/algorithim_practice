

function caseConverter(string, type){
	if (type == 'camelcase'){
		var stringArray = string.split(' ');
		var resultString = '';
		resultString += stringArray[0];
		for (let i = 1; i < stringArray.length; i++){
			var capIndex = capitalizeFirstLetter(stringArray[i]);
			resultString += capIndex;
		}
		return resultString;
	}else if (type == 'snakecase'){
		var regex = /[\s]/g;
		string = string.replace(regex, '-');
		return string;
	}
}

function capitalizeFirstLetter(stringIndex) {
    return stringIndex.charAt(0).toUpperCase() + stringIndex.slice(1);
}

// console.log(caseConverter('i like big butts', 'camelcase'));
console.log(caseConverter('i like big butts', 'snakecase'));