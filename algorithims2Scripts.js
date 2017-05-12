
///////////////////////////////////
/////////Algorithim 1!////////////
/////////////////////////////////


// function isPalindrome(num){
// 	var n = num.toString();
// 	var numArray1 = n.split("");
// 	var arrayReverse = numArray1.reverse();
// 	var reverse = arrayReverse.join("");
// 	var bool = false
// 	if (n == reverse){
// 		bool = true
// 	}
// 	return bool
// }




// function testNumbers(bottom, top){
// 	var highestPal = 0
// 	for (let i = top; i >= bottom; i--){
// 		for (let j = top; j >= bottom; j--){
// 			if (isPalindrome(i*j)){
// 				if (i*j > highestPal){
// 					highestPal = i*j
// 				}
// 			}
// 		}
// 	}
// 	console.log(highestPal)
// }


// testNumbers(100, 999)


///////////////////////////////////
/////////Algorithim 2!////////////
/////////////////////////////////

var found = false
for (let i = 2520; found == false; i += 2520){
	x = 0;
	for (let j = 20; j >= 11; j--){
		if (i % j != 0){
			break;
		}else{
			x++;
		}
	}
	if (x == 10){
		console.log(i);
		found = true;
		break;
	}
}
