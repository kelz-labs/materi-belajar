// Program sistem pengelolaan penumpang dengan javascript
// logika: penumpang masuk dan keluar

let penumpang = ["sf", undefined];

// fungsi menambah penumpang
let tambahPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang); 
        return penumpang; 
    } else {
        for (let a = 0; a < penumpang.length; a++) {
            if (penumpang[a] == undefined) {
                penumpang[a] = namaPenumpang; 
                return penumpang; 
            } else {
                penumpang.push(namaPenumpang);
                return penumpang;  
            }
        }
    }
}

let hapusPenumpang = function(namaPenumpang, penumpang) {
    if (penumpang.length == 0) {
        console.log("Angkot masih kosong"); 
        return penumpang; 
    } else {
        for (let b = 0; b < penumpang.length; b++) {
            if (penumpang[b] == namaPenumpang) {
                penumpang[a] == undefined; 
                return penumpang; 
            } else if (i == penumpang.length - 1) {

            }
        }
    }
}