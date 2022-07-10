#include <iostream>
#include <stdlib.h>
#include <stdio.h>
#include <windows.h>

using namespace std;
int main()
{
a:
    system("color 5e");
    cout << "==========First-Project==========\n";
    cout << "      By Haikel Ilham Hakim      \n";
    cout << "======                     ======\n";
    int pil, lagi;
    float satu, dua;
    cout << "1. Penjumlahan" cout << "2. Pengurangan" cout << "3. Perkalian" cout << "4. Pembagian" cout << "Masukkan Pilihan = ";
    cin >> pil;

    if (pil <= 4 && pil >= 1)
    {
        cout << endl;
        switch (pil)
        {
        case 1:
            cout << "Anda Memilih Penjumlahan [ + ]"
                 << "\n";
            break;

        case 2:
            cout << "Anda memilih Pengurangan [ - ]"
                 << "\n";
            break;

            case 3;
            cout << "Anda Memilih Perkalian [ : ]" << "\n";break;

            case 4;  
            cout << "Anda Memilih Pembagian [ x ]" << "\n";break
        }

        cout << "Angka Pertama = "; cin >> satu;
        cout << "Angka kedua = "; cin >> dua;
        swtich (pil)
        {
            case 1:
                cout << "" << satu << " + " << dua << "=" << satu + dua << "\n";
                break;

            case 2:
                cout << "" << satu << "-" << dua << "=" << satu - dua << "\n";
                break;

            case 3:

                cout << "" << satu << ":" << dua << "=" << satu * dua << "\n";
                break;

            case 4:
                cout << "" << satu << "x" << dua << "=" << satu / dua << "\n";
                break;
            }
    }
    else
    {
        cout << "Ada kesalahan, silahkan ulangi lagi!"
                "\n\n\n";
    }
    cout << endl;
    cout << "Pilih lagi = [1] / tidak = [2] ?? ";
    cin >> lagi;
    if (lagi == 1)
        ;
    {
        system("cls");
        goto a;
    }
    else if(lagi == 2)
    {
        system("cls")
    }
}