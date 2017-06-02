
var cards = ['Discover Card','Visa','MasterCard'];
var regex = [/^(6011)/,/^4/,/^(50-55)/];

function ValidateCC(cardNumber){
	var validBool = false;
	cardNumber = cardNumber.toString();
	var numberOfDigitsRequired = checkDigits(cardNumber);
	var cardType = '';
	var result = '';
	if (cardNumber.length != numberOfDigitsRequired){
		validBool = false;
		// console.log('Your card is invalid Mother F*cker!');
	}else if (numberOfDigitsRequired == 15){
		validBool = true;
		cardType = 'American Express';
	}else{
		for (let i = 0; i < regex.length; i++){
			if(cardNumber.match(regex[i])){
				validBool = true;
				cardType = cards[i];
				break;
			}else{
				validBool = false;
			}
		}
	}

	if (validBool){
		result = 'valid: ' + cardType;
	}else{
		result = 'Invalid';
	}
	console.log(result);
}

function checkDigits(cardNumber){
	var beginDigits = /^(37|34)/
	if (cardNumber.match(beginDigits)){
		return 15
	}else{
		return 16
	}
}

ValidateCC(378594063748596);
ValidateCC(6011897484753974);
ValidateCC(9823897484753974);