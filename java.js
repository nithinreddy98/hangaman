var words = [
["M","A","G","N","I","F","I","C","E","N","T"],
["C","R","E","E","D"],
["S","P","L","E","N","D","I","D"],
["A","W","K","W","A","R","D"],
["B","A","N","J","O"],
["C","R","O","Q","U","E","T"],
["C","R","Y","P","T"],
["D","W","A","R","V","E","S"],
["G","Y","P","S","Y"],
["J","U","K","E","B","O","X"],
["K","I","O","S","K"],
["M","E","M","E","N","T","O"],
["M","Y","S","T","I","F","Y"],
["O","S","T","R","A","C","I","Z","E"],
["J","I","N","X"],
["I","V","O","R","Y"],
["H","A","P","H","A","Z","A","R","D"],
["R","H","Y","T","H","M","I","C"],
["R","O","G","U","E"],
["S","P","H","I","N","X"],
["S","Q","U","A","W","K"],
["S","W","I","V","E","L"],
["T","W","E","L","F","T","H"],
["Y","A","C","H","T"],
["Z","E","A","L","O","U","S"],
["H","Y","P","H","E","N"],
["K","A","Y","A","K"],
["P","A","J","A","M","A"],
["E","Q","U","I","L","I","B","R","I","U","M"],
["J","A","C","K","P","O","T"],
["G","A","L","V","A","N","I","Z","E"],
["G","I","Z","M","O"],
["E","X","O","D","U","S"],
["B","L","I","Z","Z","A","R","D"],
["J","I","G","S","A","W"],
["G","N","A","R","L","Y"],
["M","N","E","M","O","N","I","C"],
["L","A","R","Y","N","X"],
["J","O","V","I","A","L"],
["P","N","E","U","M","O","N","I","A"],
["Q","U","A","R","T","Z"],
["S","Y","N","D","R","O","M","E"],
["T","R","A","N","S","C","R","I","P","T"],
["U","N","w","O","R","T","H","Y"],
["Z","O","D","I","A","C"],
["W","R","I","S","T","W","A","T","C","H"],
["V","O","R","T","E","X"],
["W","I","T","C","H","C","R","A","F","T"],
["X","Y","L","O","P","H","O","N","E"],
["E","S","P","I","O","N","A","G","E"],
["B","L","I","T","Z"],
["A","B","Y","S","S"],
["A","V","E","N","U","E"],
["I","N","J","U","R","Y"],
["A","B","S","U","R","D"],
["E","X","O","T","I","C"],
["A","L","P","H","A","B","E","T","S"],
["Z","O","M","B","I","E"],
["U","N","C","H","A","R","T","E","D"],
["I","S","L","A","N","D"],
["D","Y","I","N","G"],
["L","I","G","H","T"],
["A","S","S","A","S","S","I","N"],
["C","O","N","S","O","L","E"],
["M","O","N","O","P","O","L","Y"],
["S","Y","N","D","I","C","A","T","E"],
["B","A","T","M","A","N"],
["C","L","E","M","E","N","T","I","N","E"],
["V","O","L","A","T","I","L","E"],
["A","P","O","C","A","L","Y","P","S","E"],
["R","E","N","D","E","Z","V","O","U","S"]
];

var random = Math.floor((Math.random()*(words.length-1))); 

var word = words[random]; 
var letters = new Array(word.length);
var count = 0;


for (var i = 0; i < letters.length; i++){
	letters[i] = "_ ";
}


function printletters(){
	for (var i = 0; i < letters.length; i++){
	var field = document.getElementById("field");
	var letter = document.createTextNode(letters[i]);
	field.appendChild(letter);
	}
}


var check = function(){
	var f = document.fieldform; 
	var b = f.elements["inputtext"]; 
	var character = b.value; 
	character = character.toUpperCase();
	for (var i = 0; i < word.length; i++){
		if(word[i] === character){
			letters[i] = character + " ";
			var found = true;
		}
	b.value = "";
	}
	
	
	var field = document.getElementById("field");
	field.innerHTML=""; 
	printletters();
	

	if(!found){
		var generateletters = document.getElementById("generateletters");
		var letter = document.createTextNode(" " + character);
		generateletters.appendChild(letter); 
		count++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + count + ".png";
	}
	
	
	var finish = true;
	for (var i = 0; i < letters.length; i++){
		if(letters[i] === "_ "){
			finish = false;
		}
	}
	if(finish){
		window.alert("You win!");
	}
	
	
	if(count === 6){
		window.alert("Uh...I guess you're dead now.");
	}
};

function init(){
	printletters();
}

window.onload = init;