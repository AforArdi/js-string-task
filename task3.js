// Check whether a string contains all the vowels a, e, i, o, u

function checkVowel(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowerStr = str.toLowerCase();

    for (let i = 0; i<vowels.length; i++){
        if(lowerStr.includes(vowels[i])){
            return true;
        }
        return false;
    }
}
const myStr = 'n elephant is older thn the umbrell';
console.log(checkVowel(myStr));
