function saveForm() {
    var registeredUser = {};
    registeredUser.firstName = document.getElementById('first-name').value;
    registeredUser.surname = document.getElementById('surname').value;
    registeredUser.companyName = document.getElementById('company-name').value;
    registeredUser.jobTitle = document.getElementById('job-title').value;
    registeredUser.email = document.getElementById('email').value;
    registeredUser.number = document.getElementById('number').value;
    

    if (localStorage) {
        localStorage.setItem(Date.now(), JSON.stringify(registeredUser))
    }

}

function showSelected(){
    var status = document.querySelector('[name=ticketSelection]: checked')
    alert(status.value);
}