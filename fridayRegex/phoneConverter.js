
var numbers = ['2','3','4','5','6','7','8','9'];
var regexNum = [/[A-C]/gi, /[D-F]/gi, /[G-I]/gi, /[J-L]/gi, /[M-O]/gi, /[P-S]/gi, /[T-V]/gi, /[W-Z]/gi]



function convertPhone(phoneNum){
	var regex = /[0-9]+/gi;
	var phoneArray = phoneNum.match(regex);
	// console.log(phoneArray);
	var phoneStr = phoneArray.join('');
	if (phoneStr.length < 10){
		var regExSp = /[-;\s]/g;
		phoneNum = phoneNum.replace(regExSp, '');
		// var shitArray = phoneNum.split('');
		for (let i = 0; i < phoneNum.length; i++){
			phoneNum = phoneNum.replace(regexNum[i], numbers[i]);
		}
		phoneStr = phoneNum;
		// console.log(phoneStr);
	}
	if (phoneStr[0] == '1'){
		phoneStr = phoneStr.substring(1);
		// console.log(phoneStr);
	}
	if (phoneStr.length > 10){
		phoneStr = phoneStr.slice(0,10);
	}
	phoneStr = phoneStr.slice(0,3) + '-' + phoneStr.slice(3,6) + '-' + phoneStr.slice(6,11);
	console.log(phoneStr);
}


// convertPhone('4046410550');
// convertPhone('404-641-0550');
// convertPhone('(404) 641-0550');
// convertPhone('zfg(404)dghfg 641-0550');
// convertPhone('2798504trumpforprez23587928579428795458792');
// convertPhone('5-trumprules-555-5-5-5-5-5-5');
convertPhone('1900-acdc4life');
convertPhone('1-800-ninjas-are-cool');