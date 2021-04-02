function populate()
{
  if(quiz.isEnded()){
  //showScores();
}

else{
//show question
var element = document.getElementById("question");
element.innerHTML = quiz.getQuestionIndex().text;
//show choices
var choices = quiz.getQuestionIndex().choices;
for(var i=0; i< choices.length; i++){
var element = document.getElementById("choice" + i);
element.innerHTML = choices[i];
guess("bt"+i,choices[i]);
}
showProgress();
}
};

function guess(id, guess)
{
  var button = document.getElementById(id);
  button.onclick = function(){
  quiz.guess(guess);
  populate();
}
};

 function showProgress(){
 var currentQuestionNumber = quiz.questionIndex + 1;
 var element = document.getElementByID("progress");
 element.innerHTML = "Question" + currentQuestionNumber + "of" + quiz.questions.length;
};

function showscores(){
var gameoverHTML = "<h1> RESULTADO </h1>;
gameoverHTML += "<h2 id='score'> SUA PONTUAÇÃO: " + quiz.score + "</h2>";
var element = document.getElementById("quiz");
element.innerHTML = gameoverHTML;
};

//create questions 


var questions = [
new Question("Meu nome é?",["BANANA",
"BALEIA", "BABADOR","BALA"], "BALEIA"),

];

var quiz = new Quiz(questions);

populate();
