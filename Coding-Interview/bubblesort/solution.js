// bubblesort di javascript
function sort(array) {
    for (let i = 0; i < array.length; i++) {
        for(let j = 0; j < array.length; j++) {
            if(array[i] > array[j + 1]) {
                let a = array[j];
                array[j] = array[j + 1];
                array[j + 1] = a; 
            }
        }
    }

    return array; 
}

// sort
console.log(sort([23,4,6,7,1]));
