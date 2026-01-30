// Count how many times a string has the letter a
// with a function (google helped but I understand it fully)

function letterCount(str, letter){
    let count = 0;
    const lowerStr = str.toLowerCase();
    const lowerLetter = letter.toLowerCase();

    for (let i = 0; i<lowerStr.length; i++){
        if (lowerStr[i] === lowerLetter){
            count++;
        }
    }
    return count;
}

const message = 'A mad panda ran afar';
const letterToCount = 'a';
const result = letterCount(message, letterToCount);
console.log("The letter", `${letterToCount}`, "appeared in the message:", `${result}`, "times");