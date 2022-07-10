#include <iostream>
using namespace std;
int main() {
  for (int i = 10; i >= 1; i--) {
    for (int j = 10; j >= 1; j--) {
      cout << "Hasil dari faktorial " << i << " adalah: " << i * j << endl; 
    }
  }
}
