//Write a function named letterFinder that accepts two parameters: word and match.


function letterFinder(word, match) {
    // Check if the input parameters are valid
    if (typeof word !== 'string' || typeof match !== 'string') {
        console.log('Please provide valid strings as input.');
        return;
    }
    
    // Iterate through each character in the word
    for (let i = 0; i < word.length; i++) {
        // Check if the current character matches the match character
        if (word[i] === match) {
            console.log(`Found '${match}' at index ${i}`);
        }
        
    }
}

// Example usage
letterFinder("hello world", "o");  // Found 'o' at index 4, Found 'o' at index 7
letterFinder("javascript", "a");   // Found 'a' at index 1, Found 'a' at index 3
