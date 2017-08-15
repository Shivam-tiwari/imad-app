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
var counter=0;
var button = document.getElementById("counter");
button.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
}