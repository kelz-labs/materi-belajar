/*Program menghitung luas persegi dengan c++ */

#include <iostream>
using namespace std;
int main()
{
    int luas, sisi;
    cout << "====================\n";
    cout << "Program menghitung luas persegi\n";
    cout << "====================\n";
    cout << "Masukkan panjang sisi persegi: ";
    cin >> sisi;
    luas = sisi * sisi;
    cout << "Luas persegi adalah " << luas << endl;
    return 0;

}    