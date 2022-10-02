//welcome message
var user = 'Spike';
var salutation = 'Howdy, ';
var greeting = salutation + user + '! Here are the latest EveryBody! reviews.';
var greetingEL = document.getElementById('greeting');

greetingEL.textContent = greeting;

// product price
var price = 200,
    studentDiscount = .95,
    studentPrice = price - (price * studentDiscount),
    priceEl = document.getElementById ('price'),
    studentPriceEl = document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);

var price2 = 300,
    studentDiscount2 = .45,
    studentPrice2 = price2 - (price2 * studentDiscount2),
    priceEl2 = document.getElementById ('price2'),
    studentPriceEl2 = document.getElementById('student-price2');

priceEl2.textContent = price2.toFixed(2);
studentPriceEl2.textContent = studentPrice2.toFixed(2);

var price3 = 39000,
    studentDiscount3 = .01,
    studentPrice3 = price3 - (price3 * studentDiscount3),
    priceEl3 = document.getElementById ('price3'),
    studentPriceEl3 = document.getElementById('student-price3');

priceEl3.textContent = price3.toFixed(2);
studentPriceEl3.textContent = studentPrice3.toFixed(2);