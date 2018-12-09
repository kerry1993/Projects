document.body.onload = function(){

    var x=0;
    var y=0;
    var n1 = document.getElementById("firstNumber")
    var n2 = document.getElementById("secondNumber")
    
    n1.addEventListener('input', function(evt){
        y = alert(evt.target.value);
        updateResult(x,y)
    });
    n2.addEventListener('input', function(evt){
        x = alert(evt.target.value);
        updateResult(x,y)
    });

};

function displayPricesInGBP(){
    var price = 75.34;
    var formatter = new Intl.NumberFormat('en-GB',{style:'currency', currency:'GBP'});
    formatter(price); 
}

function whileLoop(){
    var a = 0;
    while(a < 10){
        console.log(a);
        a++;
    }
}

function soWhileLoop(){
    var a = 0;
    do {
    console.log(a);
    a++
    } while (a < 10);
}

function updateResult(a,b){
var y = parseFloat(parseInt(a)*parseInt(b)).toFixed(2);
switch(y){
    case 2:
    document.getElementById('result').innerText = y +" the value is 2";break;
    case 3:
    document.getElementById('result').innerText = y +" the value is 3";break;
    default:
    document.getElementById('result').innerText = y;break; 
}
};