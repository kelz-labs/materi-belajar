// Error tidak bisa dihindarkan dalam pemrograman, termasuk di Javascript. 

// dengan throw 
class Math {
    static sum(...numbers) {

        // add throw error if length of param = 0, or total param <= 0
        if(numbers.length === 0 || numbers <= 0) {
            throw new Error("Total atau Jumlah param harus lebih dari 0"); 
        }

        let result = 0; 
        for (const number of numbers) {
            result += number; 
        }

        return result; 
    }
}

const math = Math.sum(); 
console.log(math);