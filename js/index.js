var ctx,
    canvas,
    surname;
    var paint=false;
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
                    $("#canvas").bind('touchstart',function(e){
                        paint = true;
                        e.preventDefault();
                        
                        canvas= document.getElementById('canvas');
                        ctx = canvas.getContext('2d');
                        
                        var touch=event.targetTouches[0];
                        var x = (touch.pageX - $(event.target).offset().left);
                        var y = (touch.pageY - $(event.target).offset().top);
                        
                        ctx.lineWidth = 3;
                        ctx.beginPath();
                        ctx.moveTo(x,y);
                        
                        $("#canvas").bind('touchmove',function(){
                            if(paint){
                                var touch=event.targetTouches[0];
                                var x = (touch.pageX - $(event.target).offset().left);
                                var y = (touch.pageY - $(event.target).offset().top);
                                

                                
                                ctx.lineTo(x,y);
                                ctx.stroke();
                                    
                                console.log("X: " + x + " Y: " + y);
                            }
                        });
                        $("#canvas").bind('touchend',function(){
                            paint = false;
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
                        
                        ///////////////////////////////////////////////////////
                        
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
                        
                        ///////////////////////////////////////////////////////////////

                        $("#canvas").bind('touchstart',function (e){
                            paint = true;
                        e.preventDefault();
                        
                        canvas= document.getElementById('canvas');
                        ctx = canvas.getContext('2d');
                        
                        var touch=event.targetTouches[0];
                        var x = (touch.pageX - $(event.target).offset().left);
                        var y = (touch.pageY - $(event.target).offset().top);
                        
                        ctx.lineWidth = 3;
                        ctx.beginPath();
                        ctx.moveTo(x,y);
                        
                        $("#canvas").bind('touchmove',function(){
                            if(paint){
                                var touch=event.targetTouches[0];
                                var x = (touch.pageX - $(event.target).offset().left);
                                var y = (touch.pageY - $(event.target).offset().top);
                                

                                
                                ctx.lineTo(x,y);
                                ctx.stroke();
                                    
                                console.log("X: " + x + " Y: " + y);
                            }
                        });
                        $("#canvas").bind('touchend',function(){
                            paint = false;
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