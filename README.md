# quiz_project
first js html css project


At this juncture, you have learned enough to build a solid JavaScript web application. Don’t proceed any further until you can successfully build this application I describe below. Don’t be afraid to ask questions on Stack Overflow, and do reread sections of the book to properly understand the concepts.

You are building a JavaScript quiz web application (you will use HTML and CSS as well) that will function as follows:

It is a simple quiz that has radio button choices, and it will show the quiz taker his or her score upon completion.

The quiz can show any number of questions and any number of choices.

Tally the user’s score and display the final score on the last page. The last page will only show the score, so remove the last question.

Use an array to store all the questions. Each question, along with its choices and correct answer, should be stored in an object. The array of questions should look similar to this (Notice that only one question is in this example array; you will add many questions):

var allQuestions = [{question: "Who is Prime Minister of the United Kingdom?", choices: ["David Cameron", "Gordon Brown", "Winston Churchill", "Tony Blair"], correctAnswer:0}];

Dynamically (with document.getElementById or jQuery) remove the current question and add the next question, when the user clicks the “Next” button. The Next button will be the only button to navigate this version of the quiz.
