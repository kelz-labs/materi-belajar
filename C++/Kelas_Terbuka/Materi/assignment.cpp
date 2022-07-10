#include <iostream>
using namespace std; 
int main() {
  // Materi assignment atau looping

  int a = 103;
  a += 100; 
  cout << a << endl; 

  // Masuk ke penggunaan assignment
  // variabel = variabel operator ekspresi
  //    a     (+)(-)(*)(/)=    a        -        4
  // Konsepnya mirip-mirip seperti pernyataan di atas.
  // Reminder: cin.get hanya digunakan kalau dia pake windows
  int b = 10; 
  b -= 9;

  cout << "Hasilnya adalah: " << b << endl;

  int c = 12; 
  c -= 13; //c awalnya bernilai 12, namun setelah itu dikurangi dengan 13.

  cout << c << endl;

  int c = 12; 
  c += 12;
  c -= 12; 
  c *= 12; 
  c /= 12; 

  cout << c << endl; //Nanti hasilnya sama dengan 12.

  int d = 21; 
  d *= 4; 

  cout << d << endl;

  int e = 44; 
  e /= 2;

  cout << e << endl;

  return 0; 
}


#include <iostream>
using namespace std; 
int main() {
    int N;
    printf("Masukkan nilai N(harus sama dengan 7): ");
    cin >> N; 
    
    
    if (N == 7) {
        printf("\n0");
        printf("\n12");
        printf("\n345");
        printf("\n6789");
        printf("\n01234");
        printf("\n567890");
        printf("\n1234567");
    }
    
    else {
        printf("\nMaaf, nilai yang anda masukkan salah. Silahkan coba lagi!"); 
        return 0; 
    }
    
    return 0; 
}

#include <iostream>
using namespace std;

int main (){
       int a, b;
       for (a=1; a<=4; a++) {
           for (b=0; b<=2; b++) {
               cout << b << " ";
        }
    cout << endl;
       }
    return 0;
}




















