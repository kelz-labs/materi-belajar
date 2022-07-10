// static method 
// tidak hanya di class, di method pun bisa pakai static 

// math class 
class Math {

    // use rest parameter
    static sum(...numbers) {
        let total = 0; 

        for (const number of numbers) {
            total += number; 
        }

        return total; 
    }
}

const math = Math.sum(1,2,3,4,5); 
console.log(math); 