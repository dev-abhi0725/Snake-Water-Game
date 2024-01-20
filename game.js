const readlineSync = require('readline-sync');

console.log("----------------------------------------");
console.log("Welcome to Snake-Water-Gun Game!");
console.log("Rules:- Gun kills Snake, Snake drinks Water, Water destroys Gun");
console.log("Press The Given Character To Play!");
console.log("Press- G for Gun");
console.log("Press- S for Snake");
console.log("Press- W for Water");
console.log("----------------------------------------");
let again = true;
let Bpoint = 0;
let Upoint = 0;
let Uscore = 0;
let Bscore = 0;
while (again) {
  let getChar = (charSet) => {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
  };
  const charSet = ['G', 'S', 'W'];
  const randomChar = getChar(charSet);
  let ch = readlineSync.question("Enter The Character - G or S or W: ");
  let char = ch.toUpperCase();
  if (((char == 'G') && (randomChar == 'W')) || ((char == 'W') && (randomChar == 'G'))) {
    console.log("----------------------------------------");
    console.log("You Entered: " + char);
    console.log("Bot Entered: " + randomChar);
    console.log("\nWater destroyed the gun");
    if (char == 'W') {
      console.log("\nYou Win!");
      Upoint = 10;
      Uscore += Upoint;
    } 
    else {
      Bpoint = 10;
      Bscore += Bpoint;
    }
    console.log("\nYour Point = ", Uscore + "\n" + "Bot's Point = ", Bscore);
    console.log("----------------------------------------");
  } 
  else if ((char == 'S') && (randomChar == 'W') || (char == 'W') && (randomChar == 'S')) {
    console.log("----------------------------------------");
    console.log("You Entered: " + char);
    console.log("Bot Entered: " + randomChar);
    console.log("\nSnake drinks Water");
    if (char == 'S') {
      console.log("\nYou Win!");
      Upoint = 10;
      Uscore += Upoint;
    } 
    else {
      Bpoint = 10;
      Bscore += Bpoint;
    }
    console.log("\nYour Point = ", Uscore + "\n" + "Bot's Point = ", Bscore);
    console.log("----------------------------------------");
  } 
  else if ((char == 'G') && (randomChar == 'S') || (char == 'S') && (randomChar == 'G')) {
    console.log("----------------------------------------");
    console.log("You Entered: " + char);
    console.log("Bot Entered: " + randomChar);
    console.log("\nGun killed Snake");
    if (char == 'G') {
      console.log("\nYou Win!");
      Upoint = 10;
      Uscore += Upoint;
    } 
    else {
      Bpoint = 10;
      Bscore += Bpoint;
    }
    console.log("\nYour Point = ", Uscore + "\n" + "Bot's Point = ", Bscore);
    console.log("----------------------------------------");
  } 
  else if (char == 'G' && randomChar == 'G') {
    console.log("----------------------------------------");
    console.log("You Entered: " + char);
    console.log("Bot Entered: " + randomChar);
    console.log("\nDraw");
    Upoint = 0;
    Uscore += Upoint;
    Bpoint = 0;
    Bscore += Bpoint;
    console.log("\nYour Point = ", Uscore + "\n" + "Bot's Point = ", Bscore);
    console.log("----------------------------------------");
  } 
  else if (char == 'S' && randomChar == 'S') {
    console.log("----------------------------------------");
    console.log("You Entered: " + char);
    console.log("Bot Entered: " + randomChar);
    console.log("\nDraw");
    Upoint = 0;
    Uscore += Upoint;
    Bpoint = 0;
    Bscore += Bpoint;
    console.log("\nYour Point = ", Uscore + "\n" + "Bot's Point = ", Bscore);
    console.log("----------------------------------------");
  } 
  else if (char == 'W' && randomChar == 'W') {
    console.log("----------------------------------------");
    console.log("You Entered: " + char);
    console.log("Bot Entered: " + randomChar);
    console.log("\nDraw");
    Upoint = 0;
    Uscore += Upoint;
    Bpoint = 0;
    Bscore += Bpoint;
    console.log("\nYour Point = ", Uscore + "\n" + "Bot's Point = ", Bscore);
    console.log("----------------------------------------");
  } 
  else {
    console.log("----------------------------------------");
    console.warn("You Typed An Invalid Key");
    console.warn("Try Again!");
    console.log("----------------------------------------");
  }
  again = readlineSync.keyInYNStrict("\nDo You Want To Continue");
  console.log("----------------------------------------");
}
console.log("----------------------------------------");
console.log("You Scored = ", Uscore + "\n" + "Bot Scored = ", Bscore);
if (Uscore > Bscore) {
  console.log("Congratulations....You Won The Game!");
} 
else if (Uscore < Bscore) {
  console.log("Bot Won The Game!");
} 
else {
  console.log("Congratulations....It's A Draw!");
}
console.log("----------------------------------------");