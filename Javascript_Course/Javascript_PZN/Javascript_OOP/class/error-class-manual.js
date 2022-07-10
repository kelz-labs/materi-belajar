/* membuat class error secara manual 
- Walaupun JS sudah memiliki standar class error, 
- Namun alangkah baiknya kita membedakan tiap jenis error
- Untuk membuat error sendiri secara manual sangat muduah, cukup membuat class turunan dari class error
*/

// create class ValidasiError
class ValidasiError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

class Math {
    static sum(...numbers) {

        // add throw error if length of param = 0, or total param <= 0
        if (numbers.length === 0 || numbers <= 0) {
            // add ValidiasiError
            throw new ValidasiError("Total atau Jumlah param harus lebih dari 0");
        }

        let result = 0;
        for (const number of numbers) {
            result += number;
        }

        return result;
    }
}

// try catch 
try {
    console.info(Math.sum());

    // jika error, maka kode program selanjutnya tidak akan dieksekusi, kemudian lompat ke catch untuk dapetin error message
    console.log('Kode block try akan berhenti');
} catch (error) {
    if (error instanceof ValidasiError) {
        console.info(`Terjadi error di field: ${error.field} dengan error ${error.message}`); 
    } else {
        console.info(`Terjadi error: ${error.message}`); 
    }
}

console.log('Kode program di luar'); 