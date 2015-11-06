var ctx,
    canvas,
    surname;
    var paint=false;
    var scroll;
    var name,cname,date,bdate,print,sign,contact;

$(document).ready(function(){
 ////////////////////////////////////////////////////   
    
    $("#login_button").click(function(){
        $("#main_page").load('forms.html #main_content');
        
        setTimeout(function(){
            
            $("#adult").click(function(){
                $("#main_page").load('forms.html #release_adult');

                setTimeout(function(){
                    $("#clear").click(function(){
                       ctx.clearRect(0, 0, canvas.width, canvas.height); 
                    });
                    
                    //////////////////////////////////
                    $("#submit").click(function(){
                        name = document.getElementById("name_surname").value;
                        //cname = document.getElementById("child_name").value;
                        date = document.getElementById("date").value;
                       //bdate = document.getElementById("birth_day").value;
                        print = document.getElementById("printed_name").value;
                        //contact = document.getElementById("contact_info").value;
                        sign = document.getElementById("canvas").toDataURL();
                        //getData(name,cname,date,bdate,print,sign,contact);
                        console.log(name+" "+date+" "+print+" "+sign);
                        
                        
                    });
                    
                    ////////////////////////////////////
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
                                canvas= document.getElementById('canvas');
                                ctx = canvas.getContext('2d');


                                var touch=event.targetTouches[0];
                                var x = (touch.pageX - $(event.target).offset().left);
                                var y = (touch.pageY - $(event.target).offset().top);


                                

                                if(paint){
                                    ctx.beginPath();
                                    ctx.arc(x,y,7,0,Math.PI*2);
                                    ctx.moveTo(x,y);
                                    var xx = x;
                                    var yy = y;
                                    ctx.lineTo(xx,yy);
                                    ctx.fill();
                                    
                                    console.log("X: " + x + " Y: " + y);
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

                setTimeout(function(){
                        $("#clear").click(function(){
                           ctx.clearRect(0, 0, canvas.width, canvas.height); 
                        });
                        $("#submit").click(function(){
                            
                            name = document.getElementById("name_surname").value;
                            cname = document.getElementById("child_name").value;
                            date = document.getElementById("date").value;
                            bdate = document.getElementById("birth_day").value;
                            print = document.getElementById("printed_name").value;
                            contact = document.getElementById("contact_info").value;
                            sign = document.getElementById("canvas").toDataURL();
                            
                            //getData(name,cname,date,bdate,print,sign,contact);
                            console.log(name+" "+cname+" "+date+" "+bdate+" "+print+" "+sign+" "+contact);
                        });

                        $("#canvas").bind('touchstart',function (){
                            paint = true;
                            scroll = false;
                                if(!scroll){
                                    $('body').bind('touchmove', function(e){
                                    e.preventDefault();
                                    });
                                }
                            $("#canvas").bind('touchmove',function(){
                                if(paint){
                                    canvas= document.getElementById('canvas');
                                    ctx = canvas.getContext('2d');


                                    var touch=event.targetTouches[0];
                                    var x = (touch.pageX - $(event.target).offset().left);
                                    var y = (touch.pageY - $(event.target).offset().top);


                                //var x = e.clientX - xx;
                                //var y = e.clientY - yy;

                                    if(paint){
                                        ctx.beginPath();
                                        ctx.moveTo(x,y);
                                        ctx.lineTo(x+=3,y);
                                        ctx.lineTo(x,y+=3);
                                        ctx.lineTo(x-=3,y);
                                        ctx.lineTo(x,y-=3);
                                        ctx.fill();
                                        console.log("X: " + x + " Y: " + y);
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
            
        },100);
        
        
        
        
        
        
        
    });
    
////////////////////////////////////////////////////////////////////////////
});

//function getData(name,cname,date,bdate,print,sign,contact){
//    
//    
//    return name,cname,date,bdate,print,sign,contact; 
//}