// THis is my JS file for my project
// First thing I'm going to do is create question objects

function Question(question, choices, correctAnswer) {
	this.question = question;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
}

var ques1("How many dogs do I have?", [0, 1, 2, 3], 1);
var ques2("How old amy I?", [20, 52, 36. 43], 2);
var ques3("What is my name?", ["Spot", "Finn", "George", "Kerry"], 3);

var allQuestions = [ques1, ques2, ques3];

score = 0
var checkAnswer = function(userInputTBD, this.correctAnswer) {
	if(userInputTBD === this.correctAnswer) {
		var score= score + 1;}
	else {
		var score = score;}
	return score 
} 
