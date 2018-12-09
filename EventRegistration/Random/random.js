
var interval = null;

function selectImage(){
    var images = ["1.png","2.png","3.png","4.png","5.png"]
    var index = parseInt(Math.random()*images.length);
    var img = document.querySelector("img");
    img.src = "images/".concat(images[index]);

    console.log(images[index]);

};

(function (){
    start();
    var stopbtn = document.querySelector('button[id=stop]');
    var startbtn = document.querySelector('button[id=start]');
    startbtn.addEventListener('click', (evt)=>{
        start();
    }); 
    stopbtn.addEventListener('click', (evt)=>{
        interval = null;
    }); 
})();

function start(){
    interval = setInterval(setInterval(selectImage,3000));
};



var interval = setInterval(setInterval(selectImage,3000));