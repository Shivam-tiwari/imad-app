console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML=`The text has been replaced by other text
                    in main.js`;

var img = document.getElementById("shivam");
var marginleft = 0;
function MoveRight(){
 marginleft = marginleft + 10;   
 img.style.marginLeft = marginleft + "px";
}

img.onclick = function(){
    var interval = setInterval(MoveRight,100);
    
} ;