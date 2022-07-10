import java.util.Scanner; 
class balok {
  public static void main(String[] haikel) {
    
    int panjang; 
    int lebar; 
    int tinggi; 
    int luas; 
    int keliling;
    int volume; 

    Scanner scan = new Scanner(System.in); 
    System.out.println("======= Program Menghitung Balok =======\n");
    System.out.print("Masukkan Panjang: "); 
    panjang = scan.nextInt(); 
    System.out.print("Masukkan Lebar: "); 
    lebar = scan.nextInt(); 
    System.out.print("Masukkan Tinggi: "); 
    tinggi = scan.nextInt(); 

    luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi); 
    keliling = 4 * (panjang + lebar + tinggi); 
    volume = panjang * lebar * tinggi; 

    System.out.println("Luas Balok: " + luas);
    System.out.println("Keliling balok: " + keliling); 
    System.out.println("Volume Balok: " + volume); 
  }
}
