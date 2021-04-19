function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = " " + currentQuestionNumber + " / " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>RESULTADO</h1>";
    gameOverHTML += "<h2 id='score'> PONTOS: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    
    new Question("_BACAXI", ["A", "I","E", "I"], "A"),

    new Question("_SQUILO", ["A", "I","O", "E"], "E"),
    
    new Question("_BELHA?", ["E", "I","A", "O"], "A"),
    
    new Question("_NIBUS?", ["U", "E","I", "Ô"], "Ô"),
        

];


var quiz = new Quiz(questions);


populate();





