var userInput, comInput, game = true, again = false;

do{
  game = true;
  userInput = prompt("Do you choose Rock (R), Paper (P), or Scissors (S)?");

  // console.log("You chose: " + userInput);

  //////////
  //Check for valid user input
  ///////////
  userInput = userInput.toLowerCase();
  if(userInput === "rock" || userInput === "r"){
    //User chose Rock
    userInput = "r";
  }
  else if(userInput === "paper" || userInput === "p"){
    //User chose Paper
    userInput = "p";
  }
  else if(userInput === "scissors" || userInput === "s"){
    //User chose Scissors
    userInput = "s";
  }
  else {
    alert("Please enter a valid input");
    game=false;
    again = true;
  }

  // console.log("You chose: " + userInput);

  if(game){
    ///////////
    //Computer chooses
    ///////////
    comInput = Math.floor(Math.random()*3);
    if(comInput === 0){
      //Com chose Rock
      comInput = "r";
    }
    else if (comInput === 1) {
      //Com chose Paper
      comInput = "p";
    }
    else {
      //Com chose Scissors
      comInput = "s";
    }

    // console.log("Computer chose: " + comInput);

    ///////////
    //Compute and log winner
    ///////////
    if(userInput === "r"){
      if(comInput === "r"){
        alert("You chose: Rock.\n Com chose: Rock.\n It's a tie!");
      }
      else if (comInput === "p") {
        alert("You chose: Rock.\n Com chose: Paper.\n You lose!");
      }
      else{
        //Com chose Scissors
        alert("You chose: Rock.\n Com chose: Scissors.\n You win!");
      }
    }
    else if (userInput === "p") {
      if (comInput === "r") {
        alert("You chose: Paper.\n Com chose: Rock.\n You win!");
      }
      else if (comInput === "p") {
        alert("You chose: Paper.\n Com chose: Paper.\n It's a tie!");
      }
      else{
        //Com chose Scissors
        alert("You chose: Paper.\n Com chose: Scissors.\n You lose!");
      }
    }
    else {
      //User chose Scissors
      if (comInput === "r") {
        alert("You chose: Scissors.\n Com chose: Rock.\n You lose!");
      }
      else if (comInput === "p") {
        alert("You chose: Scissors.\n Com chose: Paper.\n You win!");
      }
      else {
        //Com chose Scissors
        alert("You chose: Scissors.\n Com chose: Scissors.\n It's a tie!");
      }
    }
    again = confirm("Do you want to play again?");
  }
}
while (again);
