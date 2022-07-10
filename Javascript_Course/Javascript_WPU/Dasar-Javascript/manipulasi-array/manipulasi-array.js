// manipulasi array 

// 1. Menampilkan list array 
let arr = ["a", 1, true]; 

// INGAT! Array dimulai dari index ke-0
console.log(arr[0], arr[1], arr[2]);

// 2. Memasukkan data ke dalam array kosong 
let arr1 = []; 
arr1[0] = "Turu"; 
arr1[1] = 2; 
arr1[2] = false; 

// andai jika kita ngelangkah dan langsung ke index ke-4, maka secara otomatis nilai index 3 menjadi undefined
arr1[4] = "Saya tuch";
console.log(arr1); 

// 3. Menghapus dara dari array(cara tradisional)
let arr2 = ["Mouse", "Thinkpad", "Linux"]; 
arr2[0] = undefined; 

// 4. Menampilkan data dalam array secara looping
for (let i = 0; i < arr2.length; i++) {
    console.log(arr[i]);
}