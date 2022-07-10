// Soal coding interview
// fizzbuzz
// Sama aja dengan js dan cpp tadi, tapi ini pake bahasa java

public class solution {
  public static void main(String args[]) {
    String fiz = "fizz";
    String buz = "buzz";

    for (int i = 1; i <= 100; i++) {
      if ((i % 3) == 0 && (i % 5) == 0) {
        System.out.println(fiz + buz);
      }

      else if (i % 3 == 0) {
        System.out.println(fiz);
      }

      else if (i % 5 == 0) {
        System.out.println(buz);
      }

      else {
        System.out.println(i);
      }
    }
  }
}
