/*Program nilai Ulangan*/

#include <iostream> 
using namespace std;
int main()
{
    int nilaiUAS, nilaiUTS, kehadiran, tugas;

    cout << "Masukkan nilai 1-100" << endl;
    cout << "==========================" << endl;
    cout << "Masukkan nilai kehadiran: ";
    cin >> kehadiran; /*cin fungsinya adalah seperti membuat paragraf baru*/

    cout << "Masukkan nilai tugas: " << endl;
    cin >> tugas;
    cout << "Masukkan nilai UTS: " << endl;
    cin >> nilaiUTS;
    cout << "Masukkan nilai UAS: " << endl;
    cin >> nilaiUAS;

    cout << "\n========================"
            "\nProsentase nilai =========================nkehadiran = 10% ntugas = 20% nuts = 30% nuas40%"
            "\n================================"
         << endl;

    float h_kehadiran = kehadiran * 0.1,
          h_tugas = tugas * 0.2,
          h_nilaiUTS = nilaiUTS * 0.3,
          h_nilaiUAS = nilaiUAS * 0.4,
          hasil = h_kehadiran + h_tugas + h_nilaiUTS + h_nilaiUAS;
    if (hasil < 0 || hasil > 100)
    {
        cout << "\nHasilnya error, karena data yang dimasukkan tidak sesuai!" << endl;
    }
    else
    {
        cout << "\n kehadiran : " << h_kehadiran
             << "\ntugas : " << h_tugas
             << "\nuts: " << h_nilaiUTS
             << "\nuas : " << h_nilaiUAS
             << "\njumlah : " << hasil;

        if (hasil <= 19)
        {
            cout << "\nHuruf : E";
        }
        else if (hasil <= 39)
        {
            cout << "\nHuruf : D";
        }
        else if (hasil <= 59)
        {
            cout << "\nHuruf : C";
        }
        else if (hasil <= 79)
        {
            cout << "\nHuruf : B";
        }
        else if (hasil >= 80)
        {
            cout << "\nHuruf: A";
        }
    }
}