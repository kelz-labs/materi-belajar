#include<iostream>
using namespace std
;
int main ()
{

 int baris, spasi, bintang, a;
 for (baris=1; baris<=20; baris++)
 {
  for (spasi=1; spasi<=20-baris; spasi++)
  {
   cout<<" ";
  }
  for (bintang=1; bintang<=baris; bintang++)
  {
   cout<<"* ";
  }
  cout<<endl;
 }

 return 0;
}