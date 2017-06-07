// Author - UP687318
// Zagg Value Application
// Full-Time Result Calculation

// This script is to test out the Kelly Criterion method along with probablity algorithm for Full-Time Results.
// Dummy data is being used for this example

// Example
// [(0.05 * 15) - 1] / 14

// Define dummy odds
var oddsHome = 1.80; // 55.5%
var oddsDraw = 2.80; // 35.7%
var oddsAway = 11.00; // 9.09%

// Defining both teams within objects
// More data would be supplied when requesting this data in a real world scenario
var homeTeam = {
  "ClubName" : "Chelsea",
  "Form" : ['W', 'W', 'W', 'W', 'D', 'L', 'L', 'W', 'W', 'D'],
  "location" : "Home"
}
var awayTeam = {
  "ClubName" : "Sunderland",
  "Form" : ['L', 'L', 'L', 'W', 'D', 'L', 'L', 'D', 'W', 'D'],
  "location" : "Away"
}


// Function to calculate the form for both teams
function formCal() {

  // Define home and away variables and set value to 0
  var homeWin = homeDraw = homeLose = 0;
  var awayWin = awayDraw = awayLose = 0;

  // For Loop for Home Form
  for (var i = 0; i < homeTeam.Form.length; i++) {
    if (homeTeam.Form[i] === 'W') {
      homeWin += 1;
    }
    else if (homeTeam.Form[i] === 'D') {
      homeDraw += 1;
    }
    else {
      homeLose += 1;
    }
  }

  // For Loop for Away Form
  for (var i = 0; i < awayTeam.Form.length; i++) {
    if (awayTeam.Form[i] === 'W') {
      awayWin += 1;
    }
    else if (awayTeam.Form[i] === 'D') {
      awayDraw += 1;
    }
    else {
      awayLose += 1;
    }
  }

  // Use probability and convert into decimal e.g. 55 = 0.55
  var finalHome = ((homeWin + awayLose) / 2) / 10;
  var finalDraw = ((homeDraw + awayDraw) / 2) / 10;
  var finalAway = ((homeLose + awayWin) / 2) / 10;

  // Call function and pass through each outcome results
  kellyCriterion(finalHome, finalDraw, finalAway);
}

// Use Kelly Criterion Method and utilise passed probability values
function kellyCriterion(homeProb, drawProb, awayProb) {
  var kellyHome = Math.round(((homeProb * oddsHome) - 1) / (oddsHome - 1) * 100) / 100;
  var kellyDraw = Math.round(((drawProb * oddsDraw) - 1) / (oddsDraw - 1) * 100) / 100;
  var kellyAway = Math.round(((awayProb * oddsAway) - 1) / (oddsAway - 1) * 100) / 100;

  // Identifies highest value within variables
  // Source: http://stackoverflow.com/questions/12054897/how-can-i-use-javascript-to-get-the-highest-value-of-two-variables
  var highestValue = Math.max(kellyHome, kellyDraw, kellyAway);

  highestValue *= 100;

  // Call this function to set content within elements
  setElements(highestValue);
}

// Set elements using DOM manipulation
function setElements(value) {
  var fixtureText = document.getElementsByClassName('fixture-text')[0];
  var oddsText = document.getElementsByClassName('odds-text')[0];
  var priceText = document.getElementsByClassName('price-example')[0];
  var marketTitle = document.getElementsByClassName('market-title')[0];
  var marketText = document.getElementsByClassName('market-text')[0];

  fixtureText.innerHTML = homeTeam.ClubName + ' - ' + awayTeam.ClubName;
  oddsText.innerHTML = "Stake: " + value + "% bankroll";
  priceText.innerHTML = "Odds: " + oddsAway.toFixed(2); // Source: http://stackoverflow.com/questions/4293230/how-do-i-convert-an-integer-to-a-float-in-javascript
  marketTitle.innerHTML = "Full-Time Result";
  marketText.innerHTML = awayTeam.location +  " Win";
}

formCal();
