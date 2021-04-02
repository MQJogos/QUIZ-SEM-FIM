function populate()
{
  if(quiz.isEnded()){
  showscores();
}

else{
var element = document.getElementById("question");
element.innerHTML = quiz.getQuestionIndex().text;

var choices = quizQuestionIndex().choices;
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


P15
        LARANJA - OK
        LADEIRA
        LATERNA
        LÁPIS

P16
        LIMÃO
        LESMA
        LEÃO - OK
        LATA


P17
        LUA
        LOBO - OK
        LUVA 
        LEITE


P18
        LIVRO
        LIXO - OK
        LIXA
        LIMÃO 


P19
        LUTA
        LUA
        LUVA - OK
        LOBO


P20
        LEITE - OK
        LEVE
        LEBRE
        LEQUE


P21
        LAMA
        LAÇO
        LATA - OK
        LANTERNA


P22
        LUA - OK
        LUPA
        LUTA
        LUVA


P22
         LIMA
         LIXO
         LIMÃO - OK
         LIVRO


P23
        PANELA - OK
        CANELA
        PAMONHA 
        PAVÃO 


P24
         PERNA
         PETECA - OK
         PENEIRA
         PERU


P25
         PIMENTA
         PINÓQUIO
         PIPOCA - OK
         PINTURA


P26
        PINÓQUIO - OK
        PIMENTA
        PINGUIM
        PIPOCA


P27
        PULGA
        PUDIM - OK
        PINGUIM
        POLVO


P28
        POMADA
        PORCO
        POLVO - OK
        POMBA


P29
        PIZZA
        PIMENTA
        PIPOCA
        PIRULITO - OK


P30
           PAVÃO
           PATO - OK
           PATINS
           PANDA


P31
          PEIXE - OK
          PENA
          PETECA
          PERA


P32
           RALO
           RATO - OK
           RÁDIO
           RADAR


P33
         REMO
         REDE
         RÉGUA
         REI - OK


P34
         RIO - OK
         REI
         RICO
         RISO


P35
        ROCHA
        ROMÃO
        ROBÔ - OK
        RODA


P36
        RÚCULA 
        RUA - OK
        ROBÔ
        RIO


P37
        RAIO
        RÁDIO 
        RALO - OK
        RATO


P38
         RELÓGIO - OK
         REDE
         REMO
         RÉGUA 


P39
          ROBÔ
          RODA
          ROLO - OK
          RODO


P40
        REMO
        RÉGUA
        REI
        REDE - OK


var questions = [
new Question("Meu nome é?",["BANANA",
"BALEIA", "BABADOR","BALA"], "BALEIA"),

new Question("Meu nome é?",["BALDE",
"BOLA", "BAHIA","BALA"], "BALA"),


new Question("Meu nome é?",[" BEBÊ ",
"BEBEU", "BERÇO","BERMUDA"], "BERÇO"),


new Question("Meu nome é?",["CABIDE",
"CASA", "CAMA","CASTELO"], "CASA"),


new Question("Meu nome é?",["COCO",
"COLHER", "CORUJA","COROA"], "COCO"),


new Question("Meu nome é?",["CUBO",
"CURATIVO", "CUECA","COUVE"], "CUECA"),



new Question("Meu nome é?",["CAMA",
"CAVALO", "CADEADO"," CASACO"], "CAVALO  "),


new Question("Meu nome é?",["COLHER",
"COROA", "CORUJA","COCO"], "CORUJA"),


new Question("Meu nome é?",["CURATIVO",
"CUBO", "CUECA","COLHER"], "CURATIVO  "),


new Question("Meu nome é?",["CORPO",
"COLHER ","COROA","COCO"], "COROA"),


new Question("Meu nome é?",["CASTELO",
"CASACO", "CABIDE","CAMA"], "CASACO"),


new Question("Meu nome é?",["CADEIRA",
"CAVALO", "CABIDE","CADEADO"], "CADEIRA"),



new Question("Meu nome é?",["DANONE",
"DADO", "DAMA","DATA"], "DADO"),



new Question("Meu nome é?",["DEDAL",
"DENTE", "DEDO","DENTE"], "DEDO"),



new Question("Meu nome é?",["DIA",
"DIAMANTE", "DIGITAL","DINHEIRO"], "DINHEIRO"),


new Question("Meu nome é?",["HOSPITAL",
"HOSPÍCIO", "HOTEL","HOMEM"], "HOSPITAL"),

new Question("Meu nome é?",["HIGIENE",
"HIENA", "HÉLICE","HARPA"], "HIENA"),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),


new Question("Meu nome é?",["   ",
"   ", "   ","    "], "  "),

];

var quiz = new Quiz(questions);

populate();
