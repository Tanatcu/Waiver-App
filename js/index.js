var date,
    day,
    month,
    year,
    ctx,
    name,
    surname;

$(document).ready(function(){
    $("#adult").click(function(){ 
        $("#main_page").load('forms.html #release_adult');
        setTimeout(function(){
            $("#submit").click(function(){
                alert("Hello");
            });
            $("#canvas").mousedown(drawSign);
        },
    100);
                

    });
    
    $("#child").click(function(){
        $("#main_page").load('forms.html #release_child');
        
        
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

function getData(){
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    
    //var canvas = document.getElementById("canvas");
     
    console.log(name+" "+surname);
    
}

function getDate(){
   date = new Date();
   day = date.getDate();
   month = date.getMonth();
   year = date.getFullYear(); 
}