
var histArr=[];
var histStr;

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

  $('#addition').on('click', function(e){
    histArr.push("+");
    $('#input').html("+");
    histStr=histArr.join("");
    $('#hist').html(histStr);
  });


});
