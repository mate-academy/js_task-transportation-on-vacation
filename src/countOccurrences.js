function countOccurrences(phrase, letter) {
  // Create new variables instead of modifying parameters
  const lowerPhrase = phrase.toLowerCase();
  const lowerLetter = letter.toLowerCase();

  // Use split and length to count occurrences
  return lowerPhrase.split(lowerLetter).length - 1;
}

module.exports = countOccurrences;
