const colors=['Tomato','Orange','DodgerBlue','MediumSeaGreen','Gray','SlateBlue','Violet','LightGray','yellow','red','pink','green','blue','dark pink'];

function changeColor(){
    const colorIndex=parseInt(Math.random()*colors.length)
    document.body.style.background=colors[colorIndex];
}