var soundA:HTMLAudioElement = new Audio('assets/A.mp3');
var soundC:HTMLAudioElement = new Audio('assets/C.mp3');
var soundF:HTMLAudioElement = new Audio('assets/F.mp3');
var soundG:HTMLAudioElement = new Audio('assets/G.mp3');
var soundhihat:HTMLAudioElement = new Audio('assets/hihat.mp3');
var soundkick:HTMLAudioElement = new Audio('assets/kick.mp3');
var soundlaugh1:HTMLAudioElement = new Audio('assets/laugh-1.mp3');
var soundlaugh2:HTMLAudioElement = new Audio('assets/laugh-2.mp3');
var soundsnare:HTMLAudioElement = new Audio('assets/snare.mp3');

var Reihenfolge:Array<number> = [1,1,1,3,2,3,1,2,1];
var i:number = 0;
var myvar:any;
var wahl:number = 0;

window.onload = function () {

document.getElementById('top-left').addEventListener("click",function() {   
      sound(1);  
   });
document.getElementById('top-middle').addEventListener("click",function() {   
      sound(2);  
   });
document.getElementById('top-right').addEventListener("click",function() {   
      sound(3);  
   });

document.getElementById('middle-left').addEventListener("click",function() {   
      sound(4);  
   });
document.getElementById('middle-middle').addEventListener("click",function() {   
      sound(5);  
   });
document.getElementById('middle-right').addEventListener("click",function() {   
      sound(6);  
   });
    
document.getElementById('bottom-left').addEventListener("click",function() {   
      sound(7);  
   });
document.getElementById('bottom-middle').addEventListener("click",function() {   
      sound(8);  
   });
document.getElementById('bottom-right').addEventListener("click",function() {   
      sound(9);  
   });
    
document.getElementById('play').addEventListener("click",function() {   
      drummachine();  
   });
    
function sound (wahl){
    if(Reihenfolge.length == i){
        clearInterval(myvar);
    }
    switch (wahl){
        case 1:soundhihat.play();
            break;
        case 2:soundkick.play();
            break;
        case 3: soundsnare.play();
            break;
        case 4:soundA.play();
            break;
        case 5: soundC.play();
            break;
        case 6: soundF.play();
            break;
        case 7: soundG.play();
            break;
        case 8: soundlaugh1.play();
            break;
        case 9: soundlaugh2.play();
            break;
    }
    
}
    
function drummachine(){
  
i = 0;
myvar = setInterval(function() {
    
    sound(Reihenfolge[i])
    i++;
}, 500);
              
        
   
}
    
}