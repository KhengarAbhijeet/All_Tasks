const onGuess = (()=>{
  return new Promise((resolve, reject) => {
    const userNumber = Number(window.prompt("Enter a number (1 - 6):")); // Ask the user to enter a number
    const randomNumber = Math.floor(Math.random() * 6 + 1); // Pick a random number between 1 and 6
  
    if (isNaN(userNumber)) {
      reject(new Error("Wrong Input Type")); // If the user enters a value that is not a number, run reject with an error
    }
  
    if (userNumber === randomNumber) {
      // If the user's number matches the random number, return 2 points
      resolve({
        points: 2,
        randomNumber,
      });
    } else if (
      userNumber === randomNumber - 1 ||
      userNumber === randomNumber + 1
    ) {
      // If the user's number is different than the random number by 1, return 1 point
      resolve({
        points: 1,
        randomNumber,
      });
    } else {
      // Else return 0 points
      resolve({
        points: 0,
        randomNumber,
      });
    }
  });
})

const continueGame = () => {
  return new Promise((resolve)=>{
    if(window.confirm("Do you want to continue?")){
      resolve(true);
    }
    else{
      resolve(false);
    }
  })
}

const handleGuess = ()=>{
  onGuess()
  .then((result)=>{
    alert("Dice : "+ result.randomNumber + ": you got " + result.points + " points");
    continueGame().then((res)=>{
      if(res){
        handleGuess();
      }
      else{
        alert("Game ends");
      }
    })
  })
  .catch((error)=>alert(error));
}