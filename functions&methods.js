function countVowels(name) {
  var n_vowels = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name[i].toLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      n_vowels++;
    }
  }
  return n_vowels;
}
let result = countVowels(
  "Hello World This is a Total Numbers of Vowels in a Sentence"
);

console.log(result);
