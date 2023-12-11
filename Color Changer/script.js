var colorvar = document.querySelector('#header > p:nth-child(2)');
var colorBackground = document.querySelector('.changingBotton');

document.getElementById('ChangeColor').addEventListener('click', changecolor);
for (let i = 0;i<1000000;i++){
    
    setTimeout(changecolor,1);
}
function changecolor(){
    colorcode = returnColorCode();
    colorBackground.style.backgroundColor = colorcode;
    colorvar.innerHTML = colorcode;
    colorvar.style.color = colorcode;
}   

function returnColorCode(){
    
    let hex = ['1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let hexCodes = "#";
    for (let i =0;i<6;i++){
        hexCodes+=hex[Math.floor(Math.random()*15)]
        
    }
   return hexCodes;
}


