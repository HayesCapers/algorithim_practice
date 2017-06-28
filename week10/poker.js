// Player 1 should win 376 hands... Fix It

var hands = require('./hands.js');
var pFunct = require('./functions.js')
var tieFunct = require('./tieBreak-functions.js')

function checkHands(player1Hands,player2Hands){
	var p1Score = 0;
	var p2Score = 0;
	var scores = {
		player1: p1Score,
		player2: p2Score
	}
	for (let i = 0; i < player1Hands.length; i++){
		let player1High = pFunct.findHigh(player1Hands[i]);
		let player1Stats = pFunct.findRank(player1Hands[i],player1High);
		let player2High = pFunct.findHigh(player2Hands[i]);
		let player2Stats = pFunct.findRank(player2Hands[i],player2High);	
		if(player1Stats.rank == player2Stats.rank){
			if(tieFunct.tieBreak(player1Stats,player2Stats)){
				scores.player1++;
			}else{
				scores.player2++;
			}
		}else if (player1Stats.rank > player2Stats.rank){
			scores.player1++;	
		}else{
			scores.player2++;
		}
	}
	return scores;
}

// console.log('var player1 = checkHands(hands.player1,hands.player2)');
// console.log('')
// console.log('console.log(player1)');
// console.log('')
// console.log(checkHands(hands.player1,hands.player2));
// console.log('')
// console.log('If (player1 == 376){')
// console.log('  var Me = GOD;')
// console.log('}')
// console.log('')
// console.log('console.log(Me)')
// console.log('...GOD')









