const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)\n", (name) => {
  rl.question(`Hiiiii ${name}!! What's an activity you like doing?\n`, (activity) => {
    rl.question(`Awesome! What do you listen to while doing that?\n`, (music) => {
      rl.question(`Which meal is your favorite?\n`, (meal) => {
        rl.question(`What's your favorite thing to eat for that meal?\n`, (food) => {
          rl.question(`Which sport is your absolute favorite?\n`, (sport) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!\n`, (superpower) => {
              console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
