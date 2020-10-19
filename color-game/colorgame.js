var numsquares=6;
var colors = generaterandomcolors(numsquares);

var squares = document.querySelectorAll(".square");
var msgdisplay=document.querySelector("#msg");
var pickedcolor=pickcolor();
var colordisplay=document.querySelector("#colordisplay");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");

easybtn.addEventListener("click",function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    numsquares=3;
    colors=generaterandomcolors(3);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for ( var i = 0; i < 6; i++ ) {
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
});

hardbtn.addEventListener("click",function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    numsquares=6;
    colors=generaterandomcolors(6);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
    for ( var i = 0; i <squares.length ; i++ ) {
    squares[i].style.backgroundColor = colors[i];
    }
    for ( var i = 3; i < 6; i++ ) {
    squares[i].style.display="block";
    }
    
});


reset.addEventListener("click",function(){
    
    
    colors=generaterandomcolors(numsquares);
    pickedcolor=pickcolor();
    colordisplay.textContent=pickedcolor;
     reset.textContent="New Colors";
    for ( var i = 0; i < squares.length; i++ ) {
    squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor="steelblue";
    msgdisplay.textContent="";
    
})
colordisplay.textContent=pickedcolor;

for ( var i = 0; i < squares.length; i++ ) {
    squares[i].style.backgroundColor = colors[i];
    
    squares[i].addEventListener("click",function(){
        var clickedcolor=this.style.backgroundColor;
        
        if(pickedcolor===clickedcolor ){
            changecolors(clickedcolor);
            msgdisplay.textContent="Correct!";
            reset.textContent="Play Again?";
            
            
        }
        else{
            this.style.backgroundColor="#18121a";
            msgdisplay.textContent="Try again!";
            
        }
        
    });
}
function changecolors(color){
    for(var j=0;j<squares.length;j++){
        squares[j].style.backgroundColor=pickedcolor;
        
    }
    h1.style.backgroundColor=pickedcolor;
}

function pickcolor(){
    var random=Math.floor(Math.random()* colors.length);
    return colors[random];
}

function generaterandomcolors(num){
    var arr=[];
    for(var i=0;i<num;i++){
        arr.push(randomcolors());
    }
    return arr;
}
function randomcolors(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}