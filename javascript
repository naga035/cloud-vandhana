##1.Take a sentence as an input and reverse every word in that sentence. Example - This is a sunny day > shiT si a ynnus yad.

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reverse Words in a Sentence</title>
</head>
<body>
    <input type="text" id="inputSentence" placeholder="Enter a sentence">
    <button onclick="reverseWords()">Reverse Words</button>
    <p id="outputSentence"></p>

    <script>
        function reverseWords() {
            const inputSentence = document.getElementById("inputSentence").value;
            const words = inputSentence.split(" ");
            const reversedWords = words.map(word => reverseWord(word));
            const outputSentence = reversedWords.join(" ");
            document.getElementById("outputSentence").textContent = outputSentence;
        }

        function reverseWord(word) {
            return word.split("").reverse().join("");
        }
    </script>
</body>
</html>
