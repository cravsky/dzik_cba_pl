// bind input HTML
var btn = document.querySelector('button');
var input = document.querySelector('textArea');
btn.onclick = main;

// controlls program flow
function main(){
    // read content from the text area
    var text = input.value;
    
    // remove special characters and transform text to lower case
    var cleanedText = cleanText(text);
    
    // convert cleaned text into an array sorted alphabetically
    var wordsArr = toWordsArr(cleanedText);
    
    // total number of words
    var totalWords = wordsArr.length;
    
    // put words into 2d array
    // [[wordCount,word], [wordCount, word]...], 
    var frequencyArr = toFreqArr(wordsArr);
    
    //find the length of the longest word
    var maxWordLength = findMaxWordLength(wordsArr);

    // find the longest words from the wordsArr
    var longestWordsArr = findLongestWords(wordsArr, maxWordLength);
    
    // find how many times the most frequent word appears
    var mostFrequentWordCounter = frequencyArr[frequencyArr.length-1][0];
    
    // find the most frequent words
    var mostFrequentWordsArr = 
        findMostFrequentWords(mostFrequentWordCounter,frequencyArr); 
    
    // display results
    displayResults(
                totalWords,
                longestWordsArr,
                mostFrequentWordCounter,
                mostFrequentWordsArr);
      
}

function cleanText(text){
    // remove special characters
    text = text.replace(/[^a-zA-Z ]/g, "");
    // convert to lowercase
    text = text.toLowerCase();
    return text;
}

function toWordsArr(cleanedText) {
    wordsArr = cleanedText.split(" ");
    // remove white spaces
    wordsArr = wordsArr.filter(function(str) {
        return /\S/.test(str); 
    });
    //sort array alphabetically
    wordsArr = wordsArr.sort();
    return wordsArr;  
}

function toFreqArr(wordsArr){
    var countedWordsArr = [];
    var wordCount = 0;
    var i=0;
    var m=0;// countedWords first index (number of words)
    var n=0;// countedWords second index (word)
    
    while(i<wordsArr.length){
      wordCount = wordsArr.lastIndexOf(wordsArr[i]) - wordsArr.indexOf(wordsArr[i]) + 1;
      countedWordsArr[m,n]=[wordCount, wordsArr[i]];
      m++;
      n++;
      i = wordsArr.lastIndexOf(wordsArr[i]) + 1;
    }
    // Sort array by number of the word occurances
    countedWordsArr = countedWordsArr.sort();
    return countedWordsArr;
    
}

function findMaxWordLength(wordsArr){
    var maxWordLength =0;
    for(var i=0; i<wordsArr.length;i++){
        if(wordsArr[i].length > maxWordLength){
            maxWordLength = wordsArr[i].length;
        }
    }
    return maxWordLength;
}
    
function findLongestWords(wordsArr, maxWordLength){
    var longestWords = [];
    longestWords = wordsArr.filter(testLength);
    
    function testLength(word){
        if(word.length == maxWordLength){
            return word;
        }   
    }
    return longestWords; 
}

function findMostFrequentWords(counter,frequencyArr){
    var mostFreqWords =[];
    var i = frequencyArr.length-1;
    // added second condition
    while((i>=0 && frequencyArr[i][0]==counter)){
        mostFreqWords.push(frequencyArr[i][1]);
        i--;
    } 

    return mostFreqWords;

}
function displayResults(
                totalWords,
                longestWordsArr,
                mostFrequentWordCounter,
                mostFrequentWordsArr, ){
    
    // bind output HTML
    var result1 = document.getElementById('s1');
    var result2 = document.getElementById('s2');
    var result3 = document.getElementById('s3');
    var result4 = document.getElementById('s4');                
    // diplay results
    result1.innerHTML = totalWords; 
    result2.innerHTML = mostFrequentWordsArr;
    result3.innerHTML = mostFrequentWordCounter + " times";
    result4.innerHTML = longestWordsArr;
                    
}