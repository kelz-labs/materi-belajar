// function with function
function printToFile(text: string, callback: () => void) {
    console.log(text);
    callback();
}

type MutationFunc = (param: number) => number;

function arrayMutate(numbers: number[], mutate: MutationFunc) {
    return numbers.map(mutate)
}

// const newMutate: MutationFunc = (param: number) =>`${param}`;  
console.log(arrayMutate([1, 2, 3, 4], (param) => param * 2));

// function yang mereturn function
function add(param: number): (value: number) => number {
    return (value: number) => value * param;
}

const addOne = add(10);
console.log(addOne(10)); 