/*Program beli makanan dengan c++*/

#include <iostream>
using namespace std;
int main()
{
    int uangHaikel = 54000;
int pilihannya;
cout << "Haikel pergi ke tempat makan, dan daftar makanan yang tersedia adalah sebagai berikut: " << endl;
cout << "1. Nasi goreng" <<
cout << "2. Bubur" <<
cout << "3. Lontong Sayur" <<
cout << "Dengan uang Haikel, dia bisa membeli apa saja? " <<

if(uangHaikel <= 6000) {
    cout << "Haikel tidak bisa membeli makanan apapun karena kurang duitnyag. " << endl;
}

else if(uangHaikel >= 7000 && uangHaikel <= 14000) {
    cout << "Bubur saja" << endl;
}

else if(uangHaikel >= 15000 && uangHaikel <= 22000) {
    cout << "Nasi goreng dan bubur" << endl;
}

else if {
    cout << "Bisa beli semuanya" << endl;
}



}