function RPS(choice){
  userChoice = ["rock", "paper", "scissors"];
  comChoice = ["rock", "paper", "scissors"];
  rng = Math.floor(Math.random()*3);
  document.getElementById("userChoice").innerHTML = userChoice[choice];
  document.getElementById("comChoice").innerHTML = comChoice[rng];
  if(userChoice[choice]===comChoice[rng]){
    document.getElementById("result").innerHTML = "Tie!";
  }
  else if(
    userChoice[choice]==="rock" && comChoice[rng]==="paper" ||
    userChoice[choice]==="paper" && comChoice[rng]==="scissors" ||
    userChoice[choice]==="scissors" && comChoice[rng]==="rock"){
      document.getElementById("result").innerHTML = "You lose!";
    }
    else{
      document.getElementById("result").innerHTML = "You win!";
    }
}
