#include <iostream>
using namespace std; 
int main() {
  
  cout << "Loop 1 \n" << endl;
  for(int counter = 1; counter <= 10; counter++) { // Inialisasi, loop kondisi, increment, statement 
    cout << counter << endl; 
  }

  cout << "Loop 2 \n" << endl; 
  for (int i = 1; i <= 10; i += 2) {
    cout << i << endl; 
  }

  printf("Akhir dari Program"); 
  return 0;
}
