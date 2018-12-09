
var projectDatesArray = [{  }];

// GetNameFromModel

// 

// Remove vowls from name 
function removeVowels(str) {
    return str.replace(/[aeiou]/gi, '');
}

// Sort projects in date order
array.sort(function chronalogicalOrder(a, b) {
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
});

