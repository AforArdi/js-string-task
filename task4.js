// If a given string has either x, replace x by y. if the given string has X, replace it by Y.
function replaceChar(str){
    let result = str;

    if (result.includes('x')){
        result = result.replaceAll('x', 'y');
    }
    if (result.includes('X')){
        result = result.replaceAll('X', 'Y');
    }

    return result;
}

const myStr = 'xX I like discipline Xx';
console.log(replaceChar(myStr));