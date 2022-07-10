#include <iostream>
using namespace std;
int
main ()
{
  int rahasia = 89;
  int masukan;

  cout << "Masukkan tebakan angka dari anda: ";
  cin >> masukan;
  if (masukan == rahasia)
    {
      cout << "\nTebakan anda benar!" << endl;
    }

  else if (masukan <= rahasia)
    {
      cout << "\nTebakan anda terlalu kecil!" << endl;
    }

  else if (masukan >= rahasia)
    {
      cout << "Tebakan anda terlalu besar!" << endl;
    }
    
}
