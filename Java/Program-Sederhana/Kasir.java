/* Konsep Programnya: 
- Input Harga Barang 
- Input Jumlah Barang
- Output total biaya yang dibayarkan
- Input jumlah pembayaran
- Output Pembelian*/

 // Kode awal
 package javaproject;
 import java.util.Scanner;
 
 public class Kasir {
   public static void main(String args[]) {
     System.out.println("Program Kasir");
     Scanner scn = new Scanner(System.in); 
     System.out.print("Masukkan Harga Barang: "); 
     long harga = scn.nextLong(); 

     System.out.print("Masukkan Jumlah Barang: ");
     int jumlah = scn.nextInt(); 
     long total = harga * jumlah; 
     System.out.println("Total Belanja: " + total);

     System.out.print("Masukkan Jumlah Bayar: "); 
     long bayar = scn.nextLong(); 
     long kembali = bayar - total; 
     System.out.println("Total Kembalian: "); 
   }
 }

