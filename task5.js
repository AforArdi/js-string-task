// Capitalize Every first Letter of each word in a String
// google helped, I understand 90%
function capital(str){
    let word = str.split(' ');

    for (let i = 0; i<word.length; i++){
        word[i] = word[i].charAt(0).toUpperCase() + word[i].slice(1);
    }

    return word.join(' ');
}

const message = "my name is Mohammad ardi";
console.log(capital(message));

// let myStr = "my name is Ardi";
// let word = myStr.split(' ');
// console.log(word);