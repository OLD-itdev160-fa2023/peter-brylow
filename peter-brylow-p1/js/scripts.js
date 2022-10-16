//welcome message
var user = 'Friend';
var salutation = 'Good day, ';
var greeting = salutation + user + '! Whats new?';
var greetingEL = document.getElementById('greeting');

greetingEL.textContent = greeting;


var points = 2000,
    daysInYear = 365.25,
    pointsyear = points  * daysInYear,
    pointsEl = document.getElementById ('points'),
    pointsyearEl = document.getElementById('pointsyear');

pointsEl.textContent = points.toFixed(2);
pointsyearEl.textContent = pointsyear.toFixed(2);


var points2 = 850,
    daysInYear = 365.25,
    pointsyear2 = points2  * daysInYear,
    points2El = document.getElementById ('points2'),
    pointsyear2El = document.getElementById('pointsyear2');

points2El.textContent = points2.toFixed(2);
pointsyear2El.textContent = pointsyear2.toFixed(2);

var points3 = 9880492,
    daysInYear = 365.25,
    pointsyear3 = points3  * daysInYear,
    points3El = document.getElementById ('points3'),
    pointsyear3El = document.getElementById('pointsyear3');

points3El.textContent = points3.toFixed(2);
pointsyear3El.textContent = pointsyear3.toFixed(2);


var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();} 
dateEL = getEl('date');
dateEL.textContent = getTodaysDate();