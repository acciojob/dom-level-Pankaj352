// Select the element with ID "level"
let element = document.getElementById("level");

// Initialize level counter
let level = 0;

// Traverse up the DOM tree until reaching the root <html> element
while (element) {
    level++; // Increment level count
    element = element.parentElement; // Move to the parent element
}

// Display the DOM level in an alert box
alert("The level of the element is: " + level);

// Optional: Log to console for debugging
console.log("Calculated DOM Level:", level);
