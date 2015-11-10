var ctx,
    canvas,
    surname;
    var paint=false;
    var name,cname,date,bdate,print,sign,contact,login,password;

$(document).ready(function(){
 ////////////////////////////////////////////////////   
    
    $("#login_button").click(function(){
        login = $("#login").val();
        password = document.getElementById("password").value;
        alert(login+"<=>"+password);
        back();
    });
        
        
        function back(){
            $("#main_page").load('forms.html #main_content');
            setTimeout(function(){
            
            $("#adult").click(function adult(){
                $("#main_page").load('forms.html #release_adult');

                setTimeout(function(){
                    $("#clear").click(function(){
                       ctx.clearRect(0, 0, canvas.width, canvas.height); 
                    });
                    
                    $("#back").click( back );
                    
                    //////////////////////////////////
                    $("#submit").click(function(){
                        
                        var obj = {"name" : $("#name_surname").val(),
                                    "date" : $("#date").val(),
                                    "print" : $("#printed_name").val(),
                                    "sign" : document.getElementById("canvas").toDataURL()};
                        var json = JSON.stringify(obj);
                        alert(json);
                        adult();
                        
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
            $("#child").click(function child(){
                $("#main_page").load('forms.html #release_child');

                setTimeout(function(){
                        $("#clear").click(function(){
                           ctx.clearRect(0, 0, canvas.width, canvas.height); 
                        });
                        
                        $("#back").click( back );
                        
                        ///////////////////////////////////////////////////////
                        
                        $("#submit").click(function(){
                            
                        var obj = {
                            "name" : $("#name_surname").val(),
                            "cname" : $("#child_name").val(),
                            "date" : $("#date").val(),
                            "bdate" : $("#birth_day").val(),
                            "print" : $("#printed_name").val(),
                            "contact" : $("#contact_info").val(),
                            "sign" : document.getElementById("canvas").toDataURL()};
                            
                            
                        var json = JSON.stringify(obj);
                        alert(json);
                        //$.ajax({
                            
                        //});
                            child();
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
            
        },100);}
    
////////////////////////////////////////////////////////////////////////////
});