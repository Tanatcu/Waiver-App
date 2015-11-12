var ctx,
    canvas,
    surname;
    var paint=false;
    var name,cname,date,bdate,print,sign,contact,login,password,test;

$(document).ready(function(){
    $("#main_page").load('forms.html #login_form',function(){
    
        $("#login_button").click(function(){
            login();
           
            $('#main_page').load('forms.html #select_button',function(){
                getButton("logout");
                //$('#logout').click(function(){
                //    window.location.reload();
                //    delButton();
                //});
                
                $('#adult').click(function(){
                    $('#main_page').load('forms.html #release_adult',function(){
                        renButton("back");
                        $("#canvas").bind('touchstart',drow);
                        $('#clear').click(clear);
                        $("#submit").click(submit_adult);
                         $('#back').click(st);
                    });
                });
                
                $('#child').click(function(){
                    $('#main_page').load('forms.html #release_child',function(){
                        renButton("back");
                        $('#back').click(st);
                        $("#canvas").bind('touchstart',drow);
                        $('#clear').click(clear);
                        $("#submit").click(submit_child);
                    });
                });
            });
        });
    });
});

function login(){
    login = $("#login").val();
    password = document.getElementById("password").value;
    console.log(login+" <=> "+password);
}
function getButton(text){
   test = $('<button/>',
    {
        text: text,
        id: text
    });

    $("#header").append(test); 
}
function renButton(text){
    $("#header button").prop('id',text); 
    $("#header button").text(text); 
}
function delButton(){
    $("#header").remove(test); 
}
function clear(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
}
function submit_adult(){
    var obj = {"name" : $("#name_surname").val(),
                "date" : $("#date").val(),
                "print" : $("#printed_name").val(),
                "sign" : document.getElementById("canvas").toDataURL()};
    var json = JSON.stringify(obj);
    console.log(json);
 }
 function submit_child(){
    var obj = {
        "name" : $("#name_surname").val(),
        "cname" : $("#child_name").val(),
        "date" : $("#date").val(),
        "bdate" : $("#birth_day").val(),
        "print" : $("#printed_name").val(),
        "contact" : $("#contact_info").val(),
        "sign" : document.getElementById("canvas").toDataURL()};

    var json = JSON.stringify(obj);
        console.log(json);
}
function drow(e){
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
        }
    });
    
    $("#canvas").bind('touchend',function(){
        paint = false;
        $('body').unbind('touchmove');
    });
}
function st(){
    $('#main_page').load('forms.html #select_button',function(){
        renButton("logout");
        $('#logout').click(function(){
            window.location.reload();
            delButton();
        });

        $('#adult').click(function(){
            $('#main_page').load('forms.html #release_adult',function(){
                renButton("back");
                $('#back').click(load(st));
                $("#canvas").bind('touchstart',drow);
                $('#clear').click(clear);
                $("#submit").click(submit_adult);
            });
        });

        $('#child').click(function(){
            $('#main_page').load('forms.html #release_child',function(){
                renButton("back");
                $('#back').click(st);
                $("#canvas").bind('touchstart',drow);
                $('#clear').click(clear);
                $("#submit").click(submit_child);
            });
        });
    });
};