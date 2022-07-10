/* iterable dan iterator 
- Iterable adalah fitur terbaru di ES6 
- Iterable adalah spesial object yang memiliki standarisasi. 
- Dengan mengikuti standarisasi iterable, secara otomatis kita bisa melakukan iterasi terdapat data tersebut dengan menggunakan perulangan for ... of
- Contoh yang sudah mengikuti iterable adalah string, array, object, dan lain-lain.
*/

// Karena ga ada kontrak dalam JS, jadi disini memakai typescript

// Kontrak iterator
interface Iterable<T> {
    // define method
    [Symbol.iterator](): Iterator<T>; 
}

// Kontrak iterable 
interface Iterator<T, TReturn = any, TNext = undefined> {
    next(...args: [] | [TNext]): IteratorResult<T, TReturn>; 
    return?(value?: TReturn): IteratorResult<T, TReturn>; 
    throw?(e?: any): IteratorResult<T, TReturn>; 
}