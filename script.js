// Start
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
// Questions
    function showQuestions
var myQuestions = [
    Question: "What is Javascript?",
    answers: {
      a. 'A programming language for the web'
      b. 'An electronic device for storing and processing data'
      c. 'The machines, wiring, and other physical components of a computer or other electronic system'
    }, 
    correctAnswer: 'a'
},
{
    Question: "Which is an example of a Javascript Data Type?"
    answers: {
        a. 'bottle'
        b. 'object'
        c. 'document'
    },
    correctAnswer: 'b'
},
{
  Question: "Is Javascript a case-sensitive language?"
  answers: {
    a. 'yes'
    b. 'no'
  },
  correctAnswer: 'a'
}, 

// Ouput
var Ouput = [];
var correctAnswer;

for (var i=0; i<questions.length; i++){
    
    answers =[a,b,c];

    for(letter in questions[i].correctAnswer){

// Answers


correctAnswer. push(
    '<label>'
    + '<input type="radio" name="question'+i+'" value="'+letter+'">'
    + letter + ': '
    + questions[i].answers[letter]
    + '</label>'
);
    }
    
    output.push(
        '<div class="question">' + questions[i].question + '</div>'
        + '<div class="answers">' + answers.join('') + '</div>'
    );
}

quizContainer.innerHTML = output.join('');
showQuestions(questions, quizContainer);


// Results

function showResults(questions, quizContainer, resultsContainer){

    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = '';
	var numCorrect = 0;

    for(var i=0; i<questions.length; i++){

		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		if(userAnswer===questions[i].correctAnswer){

			numCorrect++;

			answerContainers[i].style.color = 'blue';
        }

        else{
            answerContainers[i].style.color = 'red';

        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // Submitton
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

    
