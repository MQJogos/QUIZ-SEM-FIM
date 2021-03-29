function populate()
{
  if(quiz.isEnded()){
  showscores();
}
else{
var element = document.getElementById("question");
element.innerHTML = quiz.getQuestionIndex().text;
var choices = quizQuestionIndex().choices;
for(var i=0; i< choices.length; i++{
var element = document.getElementById
