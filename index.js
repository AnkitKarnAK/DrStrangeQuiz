var readlineSync=require('readline-sync');
var chalk=require('chalk');

var score=0;

var highScores={
    name: "Ankit",
    score: 14,
  }
console.log(chalk.black.underline.bgCyanBright("DR. STRANGE QUIZ"))
console.log(" ")
var userName=readlineSync.question(chalk.blueBright('what is your name? '));
console.log(chalk.blueBright('Welcome '+userName+', lets start the quiz...'));
console.log(' ')
console.log(chalk.cyan("RULES OF THE QUIZ ARE : "));
console.log(chalk.cyan("Press 'y' for yes or 'n' for no"))
console.log(chalk.cyan("For every correct answer, your score will be increased by 2"));
console.log(chalk.cyan("For every incorrect answer, your score will be decreased by 1"));
console.log(" ")

function quiz(question,answer,correct,j){
  var userAnswer=readlineSync.keyInYN(chalk.bold.red('Q'+j+': '+question));
  if (userAnswer=== answer) {
    console.log(chalk.green(" Yeah! you're right."));
    score=score+2;
  } else{
    console.log(chalk.redBright(" Ah! you're wrong."));
    console.log(chalk.yellowBright(' ▶ '+correct))
    score=score-1;
  }
  console.log("----------------------")
  console.log(" ")
}

var qOne={
  question:'Robert Downey Jr. played the role of Dr. Stephen Strange in the movie? ',
  answer: false,
  correct: 'Benedict Cumberbatch played the role of Dr. Stephen Strange'
}
var qTwo={
  question:'Dr. Strange go to Mount Everst to get himself healed? ',
  answer: false,
  correct: 'Dr. Strange go to Kamar Taj'
}
var qThree={
  question:'Thor appears in the post-credit scenes of Dr. Strange movie? ',
  answer: true,
  correct: 'Thor appered in post-credit scenes'
}
var qFour={
  question:"Dormamu was the wi-fi password that Mordo gave Strange? ",
  answer: false,
  correct:'Shamballa was the wi-fi password'
}
var qFive={
  question: "Benedict Wong is the name of the actor who plays the librarian, Wong? ",
  answer: true,
  correct:' Benedict wong played librarian'
}
var qSix={
  question:"The Eye of Agamotto relic chooses Dr. Strange? ",
  answer: false,
  correct:'The Cloak of Levitation relic choosed Dr. Strange'
}
var qSeven={
  question:"The Dark Dimension is the source of The Ancient One's power and agelessness'? ",
  answer: true,
  correct:'Dark Dimension is source of agelessness'
}
var qEight={
  question:"Stephen Strange's occupation was Neurosurgeon? ",
  answer: true,
  correct:'Dr. Strange was Neurosurgeon'
}
var qNine={
  question:"Food poising prevented Dr. Starnge from performing surgeries? ",
  answer: false,
  correct:'Car Accident prevented him from performing surgeries'
}
var qTen={
  question:"Karl Mordo was the name of Dr. Strange's trainer? ",
  answer: true,
  correct:" Karl Mordo was Dr. Strange's trainer"
}

var questions=[qOne,qTwo,qThree,qFour,qFive,qSix,qSeven,qEight,qNine,qTen];

function game() {
  for (var i=0; i<questions.length; i++) {
    quiz(questions[i].question, questions[i].answer,questions[i].correct,i+1)
  }
}
function scores() {
  if (userScore.scor >= highScores.scor){
    console.log(chalk.bgGreen("YOU HAVE BEATEN THE HIGH SCORE"))
    console.log(" ")
  } 
console.log(chalk.magentaBright("THANKS " + userName.toUpperCase() +" FOR PLAYING THE QUIZ "))
console.log(chalk.redBright("your final score is: ",+score));

}
game()

var highScores={
    name: "Ankit",
    score: 15,
  }

var userScore =
  {
    name: userName,
    scor: score
  } ;
scores()

