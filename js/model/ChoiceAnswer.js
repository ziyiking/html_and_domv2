var Question = require("./Question");
function ChoiceAnswer(identifer,answer) {
  Question.call(this,identifer,answer);
}

ChoiceAnswer.prototype = Object.create(Question.prototype);
ChoiceAnswer.prototype.constructor = ChoiceAnswer;
ChoiceAnswer.prototype.getscore = function() {
  var score = 0;
  var choice = document.getElementsByName(this.identifer);
  var string = "";

  for(var i = 0; i<choice.length; i++ ) {

    if(choice[i].checked) {

      string += choice[i].value;
    }
  }
  if(string === this.answer) {
    score += 2;
  }
  return score;
};

module.exports = ChoiceAnswer;
