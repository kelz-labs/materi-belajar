#include <iostream>
using namespace std; 
int main() {
  // Increment dan decrement. 
  // Dibagi lagi menjadi preincrement dan post increment
  

  int a = 5;
  int b = 20; 

  //post increment
  cout << a << endl;
  a++; // Artinya a = a + 1, jadi hasilnya adalah 6(5 + 1 = 6)
  cout << a << endl;

  // Preincrement
  cout << b << endl; 
  ++b; 
  cout << b << endl; // Artinya b = b + 1, Jadi hasilnya adalah 21(20 + 1 = 21)
  cout << a << endl << endl; // PEnulisan endl sebenarnya bebas saja. 

  // Contoh yang sedikit berbeda: 
  cout << a << endl; // 5
  cout << a++ << endl; // Nanti hasilnya 5, karena dia diprint dulu baru dijumlahkan.

  cout << b << endl;
  cout << ++b << endl; //Nanti hasilnya 6 karena dijumlahkan dulu baru di print

  // Decrement 
  
  cout << a << endl;
  a--;
  --a; 

  cout << b-- << endl;
  cout << --b << endl;
  return 0; 
}
