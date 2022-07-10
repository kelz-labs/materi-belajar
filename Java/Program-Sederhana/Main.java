import java.util.Scanner;
public class Main {
  public static void main (String[] args) {

    Scanner input = new Scanner (System.in); 
    System.out.print("Masukkan Bilangan Prima = "); 

    int angka = input.nextInt (); 
    int jumlah = 0; 

    System.out.println("Deret bilangan prima = ");

    for (int x = 2; x <= angka; x++) {
      int bil = 1; 
      for (int y = 2; y < x; y++) {
        if (x % y == 0) {
          bil = 0; 
        }
      }
    }
  }
}
