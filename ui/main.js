console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML=`The text has been replaced by other text
                    in main.js`;

var img = document.getElementById("shivam");
img.onclick = function(){
    img.style.marginleft="800px";
} ;