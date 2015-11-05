var date,day,month,year,ctx;

$(document).ready(function(){
    getDate();
    $("#adult").click(function(){ 
      $("#main_page").load('forms.html #adult_form');
      $("#canvas").mouseover(drawSign());
      
    });
    $("#child").click(function(){
      $("#main_page").load('forms.html #child_form');
    });
    

});
function drawSign(){
    var canvas= document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    var x = ctx.offSetLeft;
    var y = ctx.offSetTop;
    
    console.log(x+' '+y);
//    ctx.beginPath();
//    ctx.moveTo(2,1);
//    ctx.lineTo(3,2);
//    ctx.stroke();
}

function getDate(){
   date = new Date();
   day = date.getDate();
   month = date.getMonth();
   year = date.getFullYear(); 
}