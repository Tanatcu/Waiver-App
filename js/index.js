var date,day,month,year;

$(document).ready(function(){
    getDate();
    $("#adult").click(function(){ 
      $("#main_page").load('forms.html #adult_form');
    });
    $("#child").click(function(){
      $("#main_page").load('forms.html #child_form');
    });
    $("#back").click(function(){
      $("#main_page").load('index.html #main_content');
    });
    $("#back1").click(function(){
      $("#main_page").load('index.html #main_content');
    });
    
    
    //console.log(date);
});
function getDate(){
   date = new Date();
   day = date.getDate();
   month = date.getMonth();
   year = date.getFullYear(); 
}