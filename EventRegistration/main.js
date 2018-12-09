var x = 1;
var name = "john";
var isVegan = true;

function saveForm() {
    var registeredUser = {};
    registeredUser.name = "John Smith";
    registeredUser.event = "Book Reading Waterstones";
    registeredUser.title = "Mr";
    registeredUser.diet = "vegan";
    registeredUser.email = "john@smith.com"
    registeredUser.phoneNumber = "0215677657"
    registeredUser.consent = true;

    if (localStorage) {
        localStorage.setItem(Date.now(), JSON.stringify(registeredUser))
    }

}

function getUserDetails() {
    if (localStorage) {
        var userInfo = JSON.parse(localStorage.getItem(1));
        populateForm(userInfo);
    }
}

function populateForm() {
    //populate form
    document.getElementById()
}

function showMessage(isVegan) {
    if (isVegan) {
        alert(isVegan);
    } else {
        alert("Meat eater");
    }
};

function greetUser(name) {
    console.log("Hello ".concat(name));
}

function add(x, y) {
    return x + y;
}
function updateContent(){
    var fname = document.getElementById('fname');

    var c = document.getElementById('content');
    c.innerText = fname.value;

}
function showSelection(){
    var evt = document.getElementsByName('event');
    var evt2 = document.querySelector('[name=event]');
    alert(evt2.value);
    alert(evt[0].value);

}

function showDriverStautus(){
    var status = document.getElementsByName('driverStatus');

    for(var i=0; i < status.length; i++){
        if(status[i].checked){
            alert(status[i].value);
            break;
        }
    }
}

function showDriverStautusV2(){
    var status = document.querySelector('[name=driverStatus]: checked')
    alert(status.value);
}

alert(add(2 + 3));