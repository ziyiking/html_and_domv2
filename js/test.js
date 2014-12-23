(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Fillin = require("./model/fillin");
var ChoiceAnswer = require("./model/ChoiceAnswer");

$(document).ready(function() {
  $('#submit').on('click', function() {
    checkform();
  });
});

function checkform(){
var score = 0;


  var fillIn1 = new Fillin("blank1_1","统一建模语言");
  score += fillIn1.getscore();
  var fillIn2 = new Fillin("blank2_1","封装性");
  score += fillIn2.getscore();
  var fillIn3 = new Fillin("blank2_2","继承性");
  score += fillIn3.getscore();
  var fillIn4 = new Fillin("blank2_3","多态性");
  score += fillIn4.getscore();
  var fillIn5 = new Fillin("selection1","B");
  score += fillIn5.getscore();
  var fillIn6 = new Fillin("selection2","A");
  score += fillIn6.getscore();
  var ChoiceAnswer1 = new ChoiceAnswer("choice3","ABD");
  score += ChoiceAnswer1.getscore();
  var ChoiceAnswer2 = new ChoiceAnswer("choice4","ABC");
  score += ChoiceAnswer2.getscore();
  var ChoiceAnswer3 = new ChoiceAnswer("judge1","NO");
  score += ChoiceAnswer3.getscore();
  var ChoiceAnswer4 = new ChoiceAnswer("judge2","YES");
  score += ChoiceAnswer4.getscore();
  var fillIn7 = new Fillin("answer","模型是对现实世界的简化和抽象,模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体;可以是某种图形;或者是一种数学表达式。");
  score += fillIn7.getscore();

  checkblank("班级");
  checkblank("学号");
  checkblank("姓名");

  $('#score').val(score);
  return false;
  }

function checkblank(id) {
  if($('#'+id).val() === ''){
    alert(id+"不能为空");
  }

}

},{"./model/ChoiceAnswer":2,"./model/fillin":4}],2:[function(require,module,exports){
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

},{"./Question":3}],3:[function(require,module,exports){
function Question(identifer,answer) {
  this.identifer = identifer;
  this.answer = answer;
}

Question.prototype.getscore = function() {

};

module.exports = Question;

},{}],4:[function(require,module,exports){
var Question = require("./Question");
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

  module.exports = Fillin;

},{"./Question":3}]},{},[1]);
