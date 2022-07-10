/*
function with typescript

1. optional parameter
2. default parameter 
3. return type
4. function's call signature  
*/

function tambahAngka(a: number, b: number): number {
    return a * b;
}

let arr2 = [];
arr2.push(tambahAngka(12, 12))


function tambahString(a: number, b: string) {
    return `No: ${a}. String ${b}`;
}

arr2.push(tambahString(12, "12"));
console.log(arr2);


// 1. optional parameter di fungsi 
function opt(a: number, b: number, c?: number) {
    // handle error dengan dengan if else, karena c bersifat opsional
    if (c) {
        return a + b * c;
    } else {
        return a + b;
    }
}

console.log(opt(1, 2, 30)); // expected: 61

// 2. default parameter di fungsi 
function something(a: number, b: number, c = 20) {
    return a + c;
}

console.log(something(10, 2, 5)); // expected: 15