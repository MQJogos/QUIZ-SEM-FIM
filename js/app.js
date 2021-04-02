function populate(){
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
       ]
    }
}





//create questions 


var questions = [
    new Question("Meu nome é?",["BANANA","BALEIA", "BABADOR","BALA"], "BALEIA"),

];

var quiz = new Quiz(questions);

populate();
