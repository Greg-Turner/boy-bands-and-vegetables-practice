let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");
console.log(bands.length,vegetables.length);

// Execute a for loop that will iterate over the arrays
let maxNum=0;
if (bands.length > vegetables.length) {
    maxNum = bands.length;
} else {
    maxNum = vegetables.length;
}

for (let loopTracker = 0; loopTracker < maxNum; loopTracker += 1) {

  // Get a reference to the current item in the bands array
  if (loopTracker <= bands.length) {
    const currentBand = bands[loopTracker];
  
  // Update the innerHTML value of the DOM element for bands
    bandElement.innerHTML += `
    <p>${currentBand}</p>
    `
  }
  // Get a reference to the current item in the vegetables array
  if (loopTracker <= vegetables.length) {
    const currentVeggie = vegetables[loopTracker];

  // Update the innerHTML value of the DOM element for vegetables
    veggieElement.innerHTML += `
    <p>${currentVeggie}</p>
    `
  }
}