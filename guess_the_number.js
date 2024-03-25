let guess_number = Number.parseInt(Math.random(1, 100) * 100);
console.log("Arssite");
let i = 0;
guess = prompt(
  "\t\t\t\t    |  GUESS THE NUMBER  |    \t\t\t\t\n\nARSSITE\n\n Enter a number between 1 and 100:",
);
do {
  if (guess < guess_number) {
    guess = prompt(
      "\t\t\t\t    |  GUESS THE NUMBER  |    \t\t\t\t\n\n Your guess is less than the number\n\n Enter again!!",
    );
    ++i;
  } else if (guess > guess_number) {
    guess = prompt(
      "\t\t\t\t    |  GUESS THE NUMBER  |    \t\t\t\t\n\nYour guess is greater than the number\n\n Enter again!!",
    );
    ++i;
  }
} while (guess != guess_number);
let score = 100 - i*2;
alert(
  "\t\t\t\tGUESS THE NUMBER\t\t\t\t\n\nCongratulations🥳🥳 you guessed it right😁 The number generated was " +
    guess_number +
    "\n\n Your final score is \t\t " +
    score,
);

console.log(
  "GameOver\nCongratulations🥳🥳\nThe number generated was ",
  guess_number + " and you guessed it right😁\n\nYour final score is ",
  score,
);
