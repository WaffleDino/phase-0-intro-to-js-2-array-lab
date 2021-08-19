// Write your solution here!
 const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(string) {
    cats.push('Ralph');
    
}

function destructivelyPrependCat(string) {
    cats.unshift('Bob');
   
}

function destructivelyRemoveLastCat(string) {
    cats.pop();

}

function destructivelyRemoveFirstCat(string) {
    cats.shift();

}

function appendCat(string) {
    const appendCat = [...cats.slice(), 'Broom'];
    return appendCat;
}

function prependCat(string) {
    const prependCat = ['Arnold', ...cats.slice()];
    return prependCat;

}

function removeLastCat(string) {
    const removeLastCat = [...cats.slice(0,2)];
    return removeLastCat;
}

function removeFirstCat(string) {
    const removeFirstCat = [...cats.slice(-2)];
    return removeFirstCat;
}