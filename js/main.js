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
