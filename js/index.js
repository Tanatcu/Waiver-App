var date,
    day,
    month,
    year,
    ctx,
    name,
    surname;
    var paint=false;

$(document).ready(function(){
    $("#adult").click(function(){ 
        $("#main_page").load('forms.html #release_adult');
        
        setTimeout(function(){
            $("#submit").click(function(){
                alert("Hello");
            });
            $("#canvas").bind('touchstart',function(){
                paint = true;
                $("#canvas").bind('touchmove',function(e){
                    if(paint){
                    var canvas= document.getElementById('canvas');
                    ctx = canvas.getContext('2d');

                    // положение элемента
                    var pos = $(this).offset();
                    var elem_left = pos.left;
                    var elem_top = pos.top;
                    // положение курсора внутри элемента
                    var x = e.pageX - elem_left;
                    var y = e.pageY - elem_top;
                    console.log("X: " + x + " Y: " + y);
                    if(paint){
                    ctx.beginPath();
                    ctx.moveTo(x,y);
                    ctx.lineTo(x+=3,y);
                    ctx.lineTo(x,y+=3);
                    ctx.lineTo(x-=3,y);
                    ctx.lineTo(x,y-=3);
                    ctx.fill();
                
                        
                    }
                }
                });
                $("#canvas").bind('touchend',function(){
                    paint = false;
                });
                $("#canvas").mouseover(function(){
                    onscroll = false;
                });
                                
                });
                    
                
            
    },100);
                

});
    
    $("#child").click(function(){
        $("#main_page").load('forms.html #release_child');
        
        
    });

});
function drawSign(){
    

}

function getData(){
    name_surname = document.getElementById("name_surname").value;
    surname = document.getElementById("").value;
    
    //var canvas = document.getElementById("canvas");
     
    console.log(name+" "+surname);
    
}

function getDate(){
   date = new Date();
   day = date.getDate();
   month = date.getMonth();
   year = date.getFullYear(); 
}