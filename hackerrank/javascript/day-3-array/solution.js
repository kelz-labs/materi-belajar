/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    const matematika = Math.max(...nums); 
    
    nums = nums.filter(num => num !== matematika); 
    
    return Math.max(...nums);
}