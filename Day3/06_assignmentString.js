//String Word and length
const { log } = require("node:console");
let splitName = "Hello World"; let splitsWord = splitName.split(" "); console.log(`String word count ${splitName.length}`);
//console.log(splitsWord.length-1);
let eachWord="";
for (let i = splitsWord.length - 1; i >= 0; i--) 
    { console.log(splitsWord[i]); eachWord = splitsWord[i];
        break; 
    } 
    console.log(`${eachWord.length}`);

let lenghtyName = " fly me to the moon "; let splitName1 = lenghtyName.trim().split(" ")
console.log(splitName1); l
let lastWord = "";
for (let i = splitName1.length - 1; i >= 0; i--) { lastWord = splitName1[i]    
    console.log(lastWord); break; 
} 
console.log(`${lastWord.length}`);

//Two String anagrams
function isAnagram(String1, String2) {
    let str1 = String1.toLowerCase(); let str2 = String2.toLowerCase();
    let sortedString1 = str1.split('').sort().join(''); 
    let sortedString2 = str2.split('').sort().join('');
     if (sortedString1 === sortedString2) 
        { console.log("It is anagrams " + sortedString1 + "," + sortedString2); 

        }
         else 
            { 
                console.log("It is not a anagrams " + sortedString1 + "," + sortedString2); }
} 
let String1 = "listen"; 
let String2 = "silent";
let String3 = "Hello"; 
let String4 = "World"; 
console.log(isAnagram(String1, String2)); 
console.log(isAnagram(String3, String4));


//Two String anagrams
function isAnagram(strr1, strr2) { let strings1 = strr1.toLowerCase(); 
    let strings2 = strr2.toLowerCase(); 
    let sortedString1 = strings1.split('').sort().join(''); 
    let sortedString2 = strings2.split('').sort().join(''); 
    if (sortedString1 === sortedString2) 
        { console.log("It is anagrams " + sortedString1 + "," + sortedString2);

         } else 
            { 
                console.log("It is not a anagrams " + sortedString1 + "," + sortedString2); }
             }
isAnagram('listen', 'silent'); isAnagram('Hello', 'world');