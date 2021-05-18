function overlayremove(element){
    var a= document.getElementsByClassName("traineroverlay")[element];
     a.style="width:0px";
        var b= document.getElementsByClassName("traineroverlay")[element];
         b.style="width:0px"; 
         var bh= document.querySelectorAll(".traineroverlay h3")[element];
         bh.style="visibility: hidden;";
         var bl= document.querySelectorAll(".traineroverlay  li");
         for(var i=0;i< bl.length;i++){
         bl[i].style=" visibility: hidden ;"
         }
 }

function overlay(element){
   var a= document.getElementsByClassName("traineroverlay")[element];
    a.style="width:360px;   padding: 0 20px 0 20px;";
       var b= document.getElementsByClassName("traineroverlay")[element];
        b.style="width:360px;padding: 0 20px 0 20px;";
        var bh= document.querySelectorAll(".traineroverlay h3")[element];
        bh.style=" visibility: visible ;";
        var bl= document.querySelectorAll(".traineroverlay  li");
        if(element!=0){
        for(var i=bl.length/2;i< bl.length;i++){
        bl[i].style=" visibility: visible ;"
        }
        
           
    }
    if(element==0){
        for(var i=0;i< bl.length/2;i++){
        bl[i].style=" visibility: visible ;"
        }  
}
}

var played=0;
function animateValue(id, start, end, duration,step) {

    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start? step : -step;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.querySelector(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = "+"+current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}




$(window).scroll(function () {
    var offset = $(".stats").offset().top;
    var i=1;
    if ($(window).scrollTop()+100 >= offset && $(window).scrollTop() <= offset && played==0) {

        animateValue(".stats:nth-of-type(1) p:nth-child(2)", 0, 750, 10000,10);
        animateValue(".stats:nth-of-type(2) p:nth-child(2)", 0, 100, 5000,5);
        animateValue(".stats:nth-of-type(3) p:nth-child(2)", 0, 3, 1000,1);
        played=1;
        
            }
});