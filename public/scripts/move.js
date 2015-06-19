function move(name, frameData, attackRange, meterCost, buttonInput, numHits, numUses, isRestand, isKnockdown, isStartingMove){
	this.name = name;
	this.frameData = frameData;
	this.attackRange = attackRange;
	this.meterCost = meterCost;
	this.buttonInput = buttonInput;
	this.numHits = numHits;
	this.numUses = numUses;
	this.isRestand = isRestand;
	this.isKnockdown = isKnockdown;
	this.isStartingMove = isStartingMove;

	this.isCancelable = function(){
		var cancelFrameData = this.frameData[frameData.length - 1];
		if(cancelFrameData === 0)
		{
			return false;
		}
		return true;
	};
	this.moveDummy = function(){};
};

function combo(name){
	this.name = name;
	this.moves = [];

	this.addMove = function(move){
		if(move.numUses > 0)
		{
			move.isKnockdown === checkForKnockdown(this, move);
			console.log(move.isKnockdown);
		}
		this.moves.push(move);
	};
	this.print = function(){
		var comboString = "";
		this.moves.forEach(function(item)
		{
			comboString += item.buttonInput;
		})
		return console.log(comboString);
	};
};

function checkForKnockdown(combo, move){
	var counter = 1;
	combo.moves.forEach(function(moveInCombo){
		if(moveInCombo.name === move.name)
		{
			counter++;
			if(counter === move.numUses)
			{
				console.log("FLIPPED");
				return true;
			}
			
		}
		return false;
	})
};


var attack1 = new move("whiplash", [12, 3, 29, -4, 8, 19], 10, 0, "F3", 1, 0, false, false, true);
var grab = new move("throw", [10, 2, 24, -8, -7, 0], 7, 0, "L1", 1, false, 0, false, true);
var attack2 = new move("noble kicks", [21, 2, 35, -9, -4, 27], 10, 0, "3", 1, 0, false, false, false);
var attack3 = new move("royal sweep", [28, 5, 20, 0, -19, 0], 10, 0, "B4", 1, 0, false, true, true);
var special1 = new move("fan toss", [12, 4, 20, -8, 4, 0], 20, 0, "DF1", 1, 2, true, false, true);
var special2 = new move("fanado", [20, 5, 16, -12, -20, 0], 30, 1, "DB1", 1, 2, false, false, true);

var combo1 = new combo("first combo");
combo1.addMove(attack1);
combo1.addMove(attack2);
combo1.addMove(special1);
combo1.addMove(special1);





