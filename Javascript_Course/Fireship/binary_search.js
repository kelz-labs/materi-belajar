// binary search algorithm 

// misal kita ingin mendapat suatu huruf yang ada di dalam array 
const arr = ['a', 'b', 'c', 'x', 'y', 'z'];

function find(target, start, end) {
  if( start > end) {
    return 'Not found!'; 
  }

  const middle = Math.floor((start + end) / 2); 

  if(arr[middle] === target) {
    return `Found it at index ${middle}`; 
  }

  if(arr[middle] > target) {
    return find(target, start, middle - 1); 
  }

  if(arr[middle] < target) {
    return find(target, middle + 1, end);
  }
}

console.log(find());
