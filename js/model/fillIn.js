function Fillin(identifer,answer){
  Question.call(this,identifer,answer);
}

Fillin.prototype = Object.create(Question.prototype);
Fillin.prototype.constructor = Fillin;

Fillin.prototype.getscore = function() {
    var score = 0;
    var blank = document.getElementById(this.identifer);
    if(blank.value === this.answer) {
      score += 1;
    }
    return score;
  };
