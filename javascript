##1. Take a sentence as an input and reverse every word in that sentence. Example - This is a sunny day > shiT si a ynnus yad.


function reverseWords(sentence) {
  // Split the sentence into words
  const words = sentence.split(' ');

  // Reverse each word and reassemble the sentence
  const reversedWords = words.map(word => {
    return word.split('').reverse().join('');
  });

  // Join the reversed words into a sentence
  const reversedSentence = reversedWords.join(' ');

  return reversedSentence;
}

// Input sentence
const inputSentence = "This is a sunny day";

// Call the function to reverse the words
const reversedSentence = reverseWords(inputSentence);

// Print the reversed sentence
console.log(reversedSentence);



#2. Perform sorting of an array in descending order.



const arr = [5, 2, 9, 1, 5, 6];

// Sorting the array in descending order
arr.sort(function(a, b) {
  return b - a;
});

console.log(arr);




