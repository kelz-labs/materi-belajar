#include <iostream>
using namespace std;

int main(){
    string nama,kelas,npm,umur;
    int array[100], i, n;
    float rata, total=0;
    char pilih,ulang;
    
    do{
        cout<<"=======================\n";
        cout<<"====LAPORAN AKHIR 1====\n";
        cout<<"=======================\n";
        cout<<"1.Input data\n";
        cout<<"2. Input nilai\n";
        cout<<"3. Exit\n";
        cout<<"Masukkan Pilihan(1,2,3):";cin>>pilih;
        cout<<"=======================\n";
        switch(pilih){
            case '1':
                cout<<"=========DATA DIRI=========\n";
                cout<<"Masukkan Nama :";cin>>nama;
                cout<<"Masukkan Kelas :";cin>>kelas;
                cout<<"Masukkan Npm :";cin>>npm;
                cout<<"Masukkan umur :";cin>>umur;
                exit(0);
                break;
            case '2':
                cout << "================================\n";
                cout << "======Program Nilai Array======\n";
                cout << "================================\n";
 
                for(i=0; i<3; i++){
                cout << "Nilai Ke-" << i+1 << " : ";
                cin >> array[i];
                total = total + array[i];
                }
                rata = total/3;
                cout << "Hasil nilai total adalah : " << total << endl;
                cout << "Hasil rata-rata adalah : " << rata << endl;
                break;
            case '3':
                exit(0);
                default:
                cout<<("maaf angka yang anda input tidak ada dalam menu..");
            }
            cout<<"\n\nKembali kemenu utama? (y/n) :";cin>>ulang;
        }
        while(ulang=='y'||ulang=='Y');
}
