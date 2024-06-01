const prompt = require('prompt-sync')(); // Ensure prompt-sync module is installed
let light = prompt("Enter the light color (green, orange, red): ");

if (light === "green") {
    console.log("Drive");
} else if (light === "orange") {
    console.log("Get ready");
} else if (light === "red") {
    console.log("Don't drive");
} else {
    // this block will run if no condition matches
    console.log("The light is not green, orange, or red");
}
