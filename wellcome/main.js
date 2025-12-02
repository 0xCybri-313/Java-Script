// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText

let greetingEl = document.getElementById("welcome-el");

let greeting = "Welcome to our Universe, ";

// Add an emoji to the end!
// WRITE YOUR CODE BELOW HERE
// HINT: count = count + 1

// greetingEl.innerText = greetingEl.innerText + "👋";

greetingEl.innerText += "👋";

//========= Function ==========//

function greetFunction(myName, printGreet) {
  setTimeout(() => {
    greetingEl.innerText = greeting + myName;
    printGreet();
  }, 1500);
}

greetFunction("John!", () => {
  greetFunction("Naseem", () => {
    greetFunction("Khursheed");
  });
});
