// Create method to get the data
var url = 'TestData/test-data.json';

document.body.onload = () => {
    console.log('This came from a named function')
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var profileData = JSON.parse(xhr.responseText);

            getProfile(profileData);
        }
    }
    xhr.open('GET', url);
    xhr.send();
};

// Get profile data
function getProfile(profileData) {
    if (profileData) {
        // Name
        var name = document.getElementById('name');
        var title = profileData.DigitalProfile.name.title;
        var firstName = profileData.DigitalProfile.name.firstName;
        var surname = profileData.DigitalProfile.name.surname;

        name.innerText = title + ' ' + firstName + ' ' + surname;
 
        var favouriteAnimal= document.getElementById('favourite-animal');
        favouriteAnimal.src= profileData.DigitalProfile.animalPhoto.src;

        var projectOne = document.getElementById('project-one');
        var projectOneDate = profileData.DigitalProfile.projects.project1.projectDate;
        var projectOneName = profileData.DigitalProfile.projects.project1.projectName;
        projectOne.innerText = projectOneDate + " " + projectOneName;

        var projectTwo = document.getElementById('project-two');
        var projectTwoDate = profileData.DigitalProfile.projects.project2.projectDate;
        var projectTwoName = profileData.DigitalProfile.projects.project2.projectName;
        projectTwo.innerText = projectTwoDate + " " + projectTwoName;

        var projectThree = document.getElementById('project-three');
        var projectThreeDate = profileData.DigitalProfile.projects.project3.projectDate;
        var projectThreeName = profileData.DigitalProfile.projects.project3.projectName;
        projectThree.innerText = projectThreeDate + " " + projectThreeName;

        var projectFour = document.getElementById('project-four');
        var projectFourDate = profileData.DigitalProfile.projects.project4.projectDate;
        var projectFourName = profileData.DigitalProfile.projects.project4.projectName;
        projectFour.innerText = projectFourDate + " " + projectFourName;
        
        var projectFive = document.getElementById('project-five');
        var projectFiveDate = profileData.DigitalProfile.projects.project5.projectDate;
        var projectFiveName = profileData.DigitalProfile.projects.project5.projectName;
        projectFive.innerText = projectFiveDate + " " + projectFiveName;
 
        var favouriteTeam = document.getElementById('favourite-team');
        var team = profileData.DigitalProfile.favouriteTeam.team;
        var sport = profileData.DigitalProfile.favouriteTeam.sport;

        favouriteTeam.innerText = sport + ' - ' + team;
    };
};

// GetInterestingFacts
// GetFavouriteFood
// GetHobbies
// GetInterestingFacts

// Sort projects in date order
//array.sort(function chronalogicalOrder(a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    //return new Date(b.date) - new Date(a.date);
//});
