var points=0;
var lost =false;

class nuke{
    constructor(charset){
        
        this.charset=charset;
        
       
    }
    randomChar(){
        var r = Math.floor(Math.random()*this.charset.length);
        var char = this.charset.charAt(r);
        return char;
    }
   
    nukes(){
        var nukeinfo;
        var cordinations = Math.floor(Math.random()*9)+1;
        var char = this.randomChar(this.charset);
        var div = document.createElement("div");
        var canvis = document.getElementsByClassName('canvis')[0];
        div.setAttribute('class','nuke');
        
        div.style="right: "+cordinations+"0%";
        div.innerHTML=`<div class="nuke_letter">`+char+`</div>`;
        if(lost==false){
        canvis.appendChild(div)
    }}
   groundCheck(){
       try{
       var nukecord=document.querySelectorAll('.nuke')[0].offsetTop; 
       var background= document.getElementsByClassName('canvis')[0];
       var nukess = document.getElementsByClassName('nuke');
       
       if(nukecord>= window.screen.height-200){
        lost=true;
        console.log(nukess.length)
        for(var i=0;i<nukess.length;i++){
            nukess[i].remove()
             background.style="background-image: linear-gradient(to bottom,black, brown);             ";
             document.getElementsByClassName('cloud')[i].style="display:none"
            }
       alert(`You Lost \n \n Your Score was ${points}`);
       

       location.reload();
    
    }}
      catch(err){
          
          console.log("Bomb Not Found")
      } 
   }

}
function options(x) {
    var bombsdest=0;
    document.getElementsByClassName("menu")[0].style="display:none;";
    x=document.getElementsByTagName("select")[0].value;
    var sechar;
    var charEasy="QWERTYUIOPASDFGHJKLZXVCBNM";
    var charMedium="QWERTYUIOPASDFGHJKLZXCVBNM,./';][=-0987654321";
    var charHard="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM,./';][=-0987654321!@#$%^&*()_+}{|?";
    var speed=3000;
    var changespeed=speed;
    if(x==0){speed=2500; sechar= charEasy}
    else if(x==1){speed=1500; sechar= charMedium}
    else if(x==2){speed=1000; sechar= charHard}
    var game= new nuke(sechar);
    var repeater = setInterval(repeaterfr,speed)
    function repeaterfr() {game.nukes(); if(bombsdest>=5){bombsdest=0; speed=speed-200;clearInterval(repeater);repeater= setInterval(repeaterfr,speed);console.log("re"+speed)
    }}
   
//    window.setInterval(function(){
//     game.nukes(); if (bombsdest==5){speed =speed-500; }
//     }, speed);
    window.setInterval(function(){
        game.groundCheck();; 
    }, 100);
    function destroy(){
         
        window.onkeydown=function(e){
            e=e || window.event;
            var nukes = document.getElementsByClassName("nuke_letter");
            var nuke = document.getElementsByClassName("nuke");
            for(var i =0;nukes.length>i;i++){
            if(e.key == nukes[i].innerText){
                bombsdest=bombsdest+1;
                nuke[i].style="display:none";
                document.getElementById("score").innerHTML=points+100;
                points=points+100;
                nuke[i].remove();
            }}
        }
    }
    destroy();
    
}


