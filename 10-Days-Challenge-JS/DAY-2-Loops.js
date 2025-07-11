/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowelList = ["a", "e", "i", "o", "u"];
  for (let char of s) {
    if (vowelList.includes(char)) {
      console.log(char);
    }
  }
  for (let char of s) {
    if (!vowelList.includes(char)) {
      console.log(char);
    }
  }
}
