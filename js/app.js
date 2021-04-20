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
    
    new Question("_BACAXI <br><img src='ABACAXI.jpg'/></br>", ["A", "O","E", "I"], "A"),

    new Question("_SQUILO <br><img src='ESQUILO.jpg'/></br> ", ["A", "I","O", "E"], "E"),
    
    new Question("_BELHA? <br><img src='ABELHA.jpg'/></br>", ["E", "I","A", "O"], "A"),

    new Question("_GLU? <br><img src='IGLU.jpg'/></br>", ["U", "E","I", "A"], "I"),

    new Question("_VA? <br><img src='ONIBUS.jpg'/></br>", ["U", "E","I", "O"], "U"),

    new Question("_BOBORA? <br><img src='ABOBORA.jpg'/></br>", ["U", "A","I", "Ô"], "A"),

    new Question("_LEFANTE? <br><img src='ONIBUS.jpg'/></br>", ["U", "E","I", "O"], "E"),

    new Question("_BELHA? <br><img src='ONIBUS.jpg'/></br>", ["U", "E","I", "A"], "A"),

    new Question("_RVORE? <br><img src='ONIBUS.jpg'/></br>", ["U", "A","I", "E"], "A"),
        

];


var quiz = new Quiz(questions);


populate();





