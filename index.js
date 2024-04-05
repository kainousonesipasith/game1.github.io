function checkGuess() {
    var guessedAge = parseInt(document.getElementById("age").value);
    var correctAge = 22;
    var resultDiv = document.getElementById("result");

    if (guessedAge === correctAge) {
        resultDiv.innerHTML = "<p>Congratulations! You guessed it right! this is your flag : <br> flag....</p>"; //add flag here
    } else {
        resultDiv.innerHTML = "<p>Sorry, your guess is incorrect. Try again!</p>";
    }
}