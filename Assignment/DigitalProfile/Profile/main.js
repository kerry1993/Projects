// Create method to get the data
var url = 'test-data.json';

document.body.onload = () => {
    console.log('This came from a named function')
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.status == 200 && xhr.readyState == 4) {
            var profileData = JSON.parse(xhr.responseText);

            getName(profileData);
        }
    }
    xhr.open('GET', url);
    xhr.send();
};

// GetName
function getName(profileData) {
    if (profileData) {
        var name = document.getElementById('name');
        var title = profileData.DigitalProfile.name.title;
        var firstName = profileData.DigitalProfile.name.firstName;
        var surname = profileData.DigitalProfile.name.surname;

        name.innerText = title + ' ' + firstName + ' ' + surname;
    }
}

// GetPhoto

// GetProjects
function getProjects(profileData) {
    if (profileData) {
        var projects = document.getElementById('five-projects');
        var projectOneDate = profileData.DigitalProfile.projects.project1.projectdate;
        var p1date = Date.parse(projectOneDate);
        var projectTwoDate = profileData.DigitalProfile.projects.project2.projectdate;
        var projectThreeDate = profileData.DigitalProfile.projects.project3.projectdate;
        var projectFourDate = profileData.DigitalProfile.projects.project4.projectdate;
        var projectFiveDate = profileData.DigitalProfile.projects.project5.projectdate;

        var projectDatesArray = [ projectOneDate, projectTwoDate, projectThreeDate, projectFourDate, projectFiveDate ];

        name.innerText = title + ' ' + firstName + ' ' + surname;
        var datesInChronalogicalOrder = projectDatesArray.sort(a,b){
            return new Date(b.date) - new Date(a.date);
        }
    }
}

// GetAudioClip
// GetFavouriteTeam
// GetInterestingFacts
// GetFavouriteFood
// GetHobbies
// GetInterestingFacts

// Sort projects in date order
array.sort(function chronalogicalOrder(a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
});
