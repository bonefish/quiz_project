// THis is my JS file for my project
// First thing I'm going to do is create question objects

function Question(question, choices, correctAnswer) {
	this.question = question;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
};

var ques1= new Question("How many dogs do I have?", [0, 1, 2, 3], 1);
var ques2=new Question("How old amy I?", [20, 52, 36, 43], 2);
var ques3=new Question("What is my name?", ["Spot", "Finn", "George", "Kerry"], 3);

var allQuestions = [ques1, ques2, ques3];
// all questions looks like this[[question, [choice, choice, choice], correctAnswer], [question, [choice, choice, choice], correctAnswer]

//THIS IS A DRAFT FUNCTION FOR CHECKING ANSWER AND SCORING
//score = 0
//var checkAnswer = function(userInputTBD, this.correctAnswer) {
//	if(userInputTBD === this.correctAnswer) {
//		var score= score + 1;}
//	else {
//		var score = score;}
//	return score 
//} 

for (i = 0; i < allQuestions.length; i++) {
	console.log(allQuestions[i].question);
	for (x=0; x<allQuestions[i].choices.length; x++) {
		console.log(allQuestions[i].choices[x]);
	}
}