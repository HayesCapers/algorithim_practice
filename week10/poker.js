var hands = require('./hands.js');
var pFunct = require('./functions.js')

function checkHands(player1Hands,player2Hands){
	var p1Score = 0;
	var p2Score = 0;
	var scores = {
		player1: p1Score,
		player2: p2Score
	}
	for (let i = 0; i < player1Hands.length; i++){
		let player1High = pFunct.findHigh(player1Hands[i]);
		let player1Rank = pFunct.findRank(player1Hands[i],player1High);
		let player2High = pFunct.findHigh(player2Hands[i]);
		let player2Rank = pFunct.findRank(player2Hands[i],player2High);	
		if(player1Rank == player2Rank){
			if(player1High > player2High){
				scores.player1++;
			}else {
				scores.player2++;
			}
		}else if (player1Rank > player2Rank){
			scores.player1++;	
		}else{
			scores.player2++;
		}
	}
	return scores;
}

console.log(checkHands(hands.player1,hands.player2))








