//Feature 1
//how many pieces of cake I will have left if I divide out my cake (which has 12 pieces) for 5 people to eat.
//a function called howMuchLeftOverCake that passes two variables numberOfPieces and numberOfPeople 
function howMuchLeftOverCake(numberOfPieces, numberOfPeople){
  return numberOfPieces % numberOfPeople;
  
   }
 let numberOfPieces = 12;
 let numberOfPeople = 5;
 let remainder = howMuchLeftOverCake(numberOfPieces, numberOfPeople);

 //Feature 2
//Building off Feature 1, I want a console.log() to display...

//"No leftovers for you!" if there aren't any leftovers
//"You have some leftovers" if there are 2 pieces of cake or less
//"You have leftovers to share" if there are 3 - 5 pieces of cake left over
//"Hold another party!" if there are more than 5 pieces of cake left over.

 if (remainder == 0) {
  console.log("No leftovers for you");
 }
  else if (remainder <= 2){
    console.log("You have some leftovers");
  }
  else if (remainder > 3 && remainder < 5){
    console.log("You have leftovers to share");
  }
  else { 
    console.log("Hold another party!");
  } 
 
 





