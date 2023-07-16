//Level 1 create a function that, given a name, will say "good day" to that person by name.
//For example, when calling the function like this: greet("Anakin") it would log to the console, Good day, Anakin!
// function greeting(name) {
//      console.log("Good day " + name + "!");
// }

// greeting("Delvon");

//Level 2 Further customize your function by including the time of day in your greeting. 
//Hint: can functions only take one parameter?

// function greeting(name, time) {
//   console.log("Good " + time + name + "!");
// }
// greeting("Delvon", "Evening ");

// Level 3 You and Count Dooku are enemies. Further customize your code to say, "I'm coming for you, Dooku!" 
//if your function is called with "Count Dooku".

function greeting(name, time) {
  if (name === "Count Dooku") 
  console.log("I'm coming for you, Dooku!");
  else {
  console.log("Good " + time + name + "!");
  }
}

greeting("Count Dooku");
greeting("Delvon", "Evening ");


