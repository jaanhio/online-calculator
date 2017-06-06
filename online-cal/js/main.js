
var histArr=[];
var histStr;
var sum;

$(document).ready(function(){

  $('#1').on('click', function(e){
    histArr.push("1");
    $('#input').html("1");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#2').on('click', function(e){
    histArr.push("2");
    $('#input').html("2");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#3').on('click', function(e){
    histArr.push("3");
    $('#input').html("3");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#4').on('click', function(e){
    histArr.push("4");
    $('#input').html("4");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#5').on('click', function(e){
    histArr.push("5");
    $('#input').html("5");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#6').on('click', function(e){
    histArr.push("6");
    $('#input').html("6");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#7').on('click', function(e){
    histArr.push("7");
    $('#input').html("7");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#8').on('click', function(e){
    histArr.push("8");
    $('#input').html("8");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#9').on('click', function(e){
    histArr.push("9");
    $('#input').html("9");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#0').on('click', function(e){
    if(histArr.length!==0){
    histArr.push("0");
    $('#input').html("0");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  }
  });

  $('#addition').on('click', function(e){
    if(histArr[histArr.length-1] !== "+" && histArr[histArr.length-1] !== "-" && histArr[histArr.length-1] !== "/" && histArr[histArr.length-1] !== "*" && histArr[histArr.length-1] !== ".")
    histArr.push("+");
    $('#input').html("+");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#multiply').on('click', function(e){
    if(histArr[histArr.length-1] !== "+" && histArr[histArr.length-1] !== "-" && histArr[histArr.length-1] !== "/" && histArr[histArr.length-1] !== "*" && histArr[histArr.length-1] !== ".")
    histArr.push("*");
    $('#input').html("*");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#divide').on('click', function(e){
    if(histArr[histArr.length-1] !== "+" && histArr[histArr.length-1] !== "-" && histArr[histArr.length-1] !== "/" && histArr[histArr.length-1] !== "*" && histArr[histArr.length-1] !== ".")
    histArr.push("/");
    $('#input').html("/");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#subtract').on('click', function(e){
    if(histArr[histArr.length-1] !== "+" && histArr[histArr.length-1] !== "-" && histArr[histArr.length-1] !== "/" && histArr[histArr.length-1] !== "*" && histArr[histArr.length-1] !== ".")
    histArr.push("-");
    $('#input').html("-");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#equals').on('click', function(e){
    histStr=histArr.join("");
    sum=eval(histStr);
    $('#hist').html(sum);
  });

  $('#c').on('click', function(e){
    histArr=[];
    $('#input').html(histArr);
    $('#hist').html(histArr);
  });

  $('#decimal').on('click', function(e){
    if(histArr[histArr.length-1] !== "+" && histArr[histArr.length-1] !== "-" && histArr[histArr.length-1] !== "/" && histArr[histArr.length-1] !== "*" && histArr[histArr.length-1] !== ".")
    histArr.push(".");
    $('#input').html(".");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

  $('#backspace').on('click', function(e){
    histArr.pop();
    $('#input').html("");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });

});
