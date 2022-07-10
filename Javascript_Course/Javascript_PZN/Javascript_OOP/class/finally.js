/* finally 
- Kaddang kita ingin melakukan sesuatu entah itu terjadi error atau tidak 
- dalam try catch, kita bisa menambahkan block finally 
- block finally ini akan selalu dieksekusi setellah try catch selesai, entah itu terjadi error atau tidak, block akan selalu diekseskusi. 
*/

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

// try catch 
try {
    console.info(Math.sum());
    
    // jika error, maka kode program selanjutnya tidak akan dieksekusi, kemudian lompat ke catch untuk dapetin error message
    console.log('Kode block try akan berhenti'); 
} catch (error) {
    // property message for error handling 
    console.error(`Terjadi error: ${error.message}`); 
} 

// define finally
// dimana dia tetap dieksekusi tidak peduli error atau tidak  
finally {
    console.info('Program Selesai');
}