var ctx, canvas, surname;
var paint = false;
var name, cname, date, bdate, print, sign, contact, test, par, access, pass;
var Reg61 = new RegExp("[0-9]");

$(document).ready(function () {
    load('login_form');
});
$(document).on('click', '.data', function () {
    par = $(this).val();
    load(par);
    renButton('back', 'select_button');
});
$(document).on('click', '#login_button', function () {
    par = 0;
    par = $(this).val();
    var obj = {
        "username": $("#login").val(),
        "password": $("#password").val()
    };
    $.ajax({
        url: 'http://192.168.0.104/backend/web/index.php/auth-app/login-app',
        type: 'POST',
        data: obj,
        success: function (data) {
            if (data) {
                load(par);
                getButton('logout', 'logout', 'login_form');

            } else {
                alert('Wrong login or password!');
            }
        },
        error: function (msg) {
            alert('Access denied! ' + msg.status);
        }
    });
});
$(document).on('click', '#logout', function () {
    par = $(this).val();
    load(par);
    delButton();
});
$(document).on('click', '#back', function () {
    par = $(this).val();
    load(par);
    renButton('logout', 'login_form');
});
$(document).on('click', '#submit', function () {
    par = $(this).val();
    if (par === "adult") {
        submit_adult();
    }
    if (par === "child") {
        submit_child();
    }
});
$(document).on('click', '#clear', clear);
$(document).on('touchstart', '#canvas', drow);
function load(par) {
    $('#main_page').load('forms.html #' + par + '');
}
function getButton(text, clas, val) {
    test = $('<button/>',
        {
            text: text,
            class: clas,
            value: val,
            id: text
        });

    $("#header").append(test);
    return true;
}
function renButton(text, sit) {
    $("#header button").prop('value', sit);
    $("#header button").prop('id', text);
    $("#header button").text(text);
}
function delButton() {
    $('#logout').remove();
}
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function submit_adult() {
    var obj = {
        "fullname": $("#name_surname").val(),
        "date": $("#date").val(),
        "printname": $("#printed_name").val(),
        "sign": document.getElementById("canvas").toDataURL()
    };
    if (Reg61.test(obj.fullname)) {
        alert("Full name must be only letters");
        return false;
    }
    if (Reg61.test(obj.printname)) {
        alert("Print name must be only letters");
        return false;
    }

    $.ajax({
        url: 'http://192.168.0.104/backend/web/index.php/auth-app/send-adult',
        type: 'POST',
        data: obj,
        success: function (data) {
            if (data) {
                load("select_button");
                alert('Data sent!');
            } else {
                alert('Data not sent! Not all fields are filled!');
            }
        },
        error: function (msg) {
            alert('Data not sent! ' + msg.status);
        }
    });
}
function submit_child() {
    var obj = {
        "parentname": $("#name_surname").val(),
        "childname": $("#child_name").val(),
        "date": $("#date").val(),
        "childbirth": $("#birth_day").val(),
        "printname": $("#printed_name").val(),
        "contactinfo": $("#contact_info").val(),
        "sign": document.getElementById("canvas").toDataURL()
    };
    if (Reg61.test(obj.parentname)) {
        alert("Full name of parents must be only letters");
        return false;
    }
    if (Reg61.test(obj.childname)) {
        alert("Full name of child must be only letters");
        return false;
    }
    if (Reg61.test(obj.printname)) {
        alert("Print name must be only letters");
        return false;
    }
    console.log(obj.sign);
    $.ajax({
        url: 'http://192.168.0.104/backend/web/index.php/auth-app/send-child',
        type: 'POST',
        data: obj,
        success: function (data) {
            if (data) {
                load("select_button");
                alert('Data sent!');
            } else {
                alert('Data not sent! Not all fields are filled! ');
            }
        },
        error: function (msg) {
            alert('Data not sent! ' + msg.status);
        }
    });
}
function drow(e) {
    paint = true;
    e.preventDefault();

    canvas = document.getElementById('canvas');

    ctx = canvas.getContext('2d');

    var touch = event.targetTouches[0];
    var x = (touch.pageX - $(event.target).offset().left);
    var y = (touch.pageY - $(event.target).offset().top);

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(x, y);

    $("#canvas").bind('touchmove', function () {
        if (paint) {
            var touch = event.targetTouches[0];
            var x = (touch.pageX - $(event.target).offset().left);
            var y = (touch.pageY - $(event.target).offset().top);

            ctx.lineTo(x, y);
            ctx.stroke();
        }
    });
    $("#canvas").bind('touchend', function () {
        paint = false;
        $('body').unbind('touchmove');
    });
}