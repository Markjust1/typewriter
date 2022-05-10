const sentence = "hello there from lighthouse labs";
// looping through the characters in a string
for (let i = 0; i < sentence.length; i++) {
// setting timer so each character appears after 50sec on the same line
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 * i);
  // timer is set to when the loop is done its iteration
  if (i === sentence.length - 1) {
    setTimeout(() => {
      // setting the new line // can also be done with ('\n')
      console.log();
    }, 50 * (i + 1));
  } 
}

