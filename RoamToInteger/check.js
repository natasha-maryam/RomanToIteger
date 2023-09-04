// takes a string and char as arguments
// return if the char is found in string

function checkCharacter(s, char) {
  let i = 0;
  let isFound = false;
  while (i <= s.length) {
    if (s[i] === char) {
      isFound = true;
    }
    i++;
  }
  return isFound ? true : false;
}

console.log(checkCharacter("Natasha", "s"));
console.log(checkCharacter("Natasha", "c"));
console.log(checkCharacter("Natasha", "S"));
