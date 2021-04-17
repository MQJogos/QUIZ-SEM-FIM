function populate() {
    if (quiz.isEnded() ) {
        showScores();
    }
    else{
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("bt" + i, choices[i]);
        
        }

        showProgress();
    }
    
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
};


function showProgress(){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = " PERGUNTA " + currentQuestionNumber + " DE " + quiz.questions.length;
};

function showScores(){
    var gameOverHTML = "<h1> Resultado </h1>";
    gameOverHTML += "<h2 id='score'> SUA PONTUAÇÃO: " + quiz.score + "</h2>";
    var element = document.getElementByID("quiz");
    element.innerHTML = gameOverHTML;
};


//create questions
var questions = [
    new Question("Qual a capital da India?",["New Delhi","Mumbai","Jaipur","Kolkata"],"New Delhi"),

    new Question("Animal Nacional da Índia?", ["Elephant", "Bengal Tiger","Lion", "Cow"], "Bengal Tiger"),
    
    new Question("Rio Nacional da Índia?", ["Yamuna", "Ganga","Brahmputra", "Sindhu"], "Ganga"),
    
    new Question("Moeda da Índia?", ["Dollar", "Rupee","Euro", "Pound"], "Rupee"),
];

var quiz = new  Quiz(questions);

populate();
