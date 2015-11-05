var date,
    day,
    month,
    year,
    ctx,
    name,
    surname;
    var paint=false;
    var scroll;

$(document).ready(function(){
    $("#adult").click(function(){ 
        $("#main_page").load('forms.html #release_adult');
        
        setTimeout(function(){
            $("#submit").click(function(){
                alert("Hello");
            });
            $("#canvas").bind('touchstart',function(){
                paint = true;
                scroll = false;
                        if(!scroll){
                        $('body').bind('touchmove', function(e){
                        e.preventDefault();
                        });
                    }
                $("#canvas").bind('touchmove',function(){
                    if(paint){
                        var canvas= document.getElementById('canvas');
                        ctx = canvas.getContext('2d');


                        var touch=event.targetTouches[0];
                        var x = (touch.clientX - $(event.target).offset().left);
                        var y = (touch.clientY - $(event.target).offset().top)+1368;
                        
                        
//                        var x = touch.pageX - elem_left;
//                        var y = touch.pageY - elem_top;
                        console.log("X: " + x + " Y: " + y+2000);
                        
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
                    scroll = true;
                    $('body').unbind('touchmove');
                    
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