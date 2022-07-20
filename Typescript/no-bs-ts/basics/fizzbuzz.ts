/* 

misalkan diberikan suatu angka dan kita harus mengeluarkan hasil berupa looping sebanyak angka tersebut

andaikanlah angkanya 100. 

Logic: 

- jika habis dibagi 3 dan 5, maka akan menghasilkan output "fizzbuzz"
- jika habis dibagi 3 saja, maka akan menghasilkan output "fizz"
- jika habis dibagi 5 saja, maka akan menghasilkan output "buzz"
- jika tidak habis dibagi keduanya, maka akan menghasilkan output nilai angkanya itu sendiri 
 
example: 

1
2
fizz
4
buzz
dst...

 */
let fizz: string = "fizz";
let buzz: string = "buzz";
let nilai: number = 100;

let arr: number[] | string[] = [];

for (let i: number = 0; i <= nilai; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        arr.push((fizz + buzz) as never);
    } else if (i % 3 == 0) {
        arr.push(fizz as never);
    } else if (i % 5 == 0) {
        arr.push(buzz as never);
    } else {
        arr.push(i as never);
    }
}

console.log(arr); 