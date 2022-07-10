int mark = 100;

if (mark >= 50) {
  cout << "Kamu Berhasil" << endl;
  if (mark == 100) {
    cout << "perfect!" << endl;
  }
} else {
  cout << "maaf kamu gagal" << endl;
}
//------------------------------------
int age = 18;
if (age > 14) {
  if (age >= 18) {
    cout << "adult/dewasa";
  }

  else {
    cout << "Masih muda";
  }
} else {
  if (age > 0) {
    cout << "child";
  } else {
    cout << "something's wrong";
  }
}
int ad - 10;
if (a > 4)       // jika a lebih dari 4
  cout << "yes"; // maka hasilnya adalah yes
else             // jika salah
  cout << "No";  // maka hasil nya no atau tidak

// belajar loop

while (condition) {
  statement(s);
}

int num = 1;                        // input nya sama dengan 1
while (num < 6) {                   // jika num sama dengan 1,
  cout << "angka" : << num << endl; // angka 1
  num = num + 3;
}
int num = 1;
while (num < 6) {
  cout << "number: " << endl;
  num++;
}
// latihan while loop
int num = 1;
int number;
while (num <= 5) {
  cin >> number;
  num++;
}

int num = 12;
int number;
int total = 0;

while (num <= 15) {
  cin >> number;
  total += number;
  num++
}
cout << total << endl;

// the for loop
for (init; condition; increment;) {
  statement(s);
}
for (int x = 1; x < 10; x++) {
  // code nya
}

// contoh :
for (int a = 0; a < 10; a++) {
  cout << a << endl;
}

for (int a - 0; a < 50; a += 10) {
  cout << a << endl;
}

for (int a = 0; a >= 0; a -= 3) {
  cout << a << endl;
}

// belajar do while
do {
  statement(s);
} while (condition);

int a = 0;
do {
  cout << a << endl;
  a++;
} while (a < 5);

switch (expression) {
case value1:
  statement(s);
  break;
case value2:
  statement(s);
  break;
  ... case valueN : statement(s);
  break;
}

// belajar switch
int age = 42;
switch (age) {
case 16:
  cout << "terlalu muda";
  break;
case 42:
  cout << "tua";
case 70:
  break;
  cout << "terlalu tua/ senior";
  break;
}
// belajar default case
int age = 25;
switch (age) {
case 16:
  cout << "too young atau terlalu muda" break;
case 42:
  cout << "adult";
  break;
case 70:
  cout << "udah senior";
  break;
default:
  cout << "default case"
}
// belajar break statement
int age = 42;
switch (age) {
case 16:
  cout << 'too young' << endl;
case 42:
  cout << 'adult' << endl;
  break;
case 70:
  cout << 'too adult' << endl;
  default << 'this is the default case' << endl;
}
/*Jenis jenis operator dalam c++

&& = AND operator   y&&y
|| = OR operator    x||y
! = NOT operator    !x
*/

// belajar AND operator(&&)
int age = 20;
int grade = 80;
if (age > 16 && age < 60 && grade > 50) {
  cout << "diterima" << endl;
}

// belajar OR operator(||)
int age = 16;
int score = 90;
if (age > 20 || score > 50) {
  cout << 'diterima' << endl;
}

// belajar NOT operator
int age = 10;
if (!(age > 16)) {
  cout << 'masih muda atau masih kurang dari 16 tahun' << endl;
}

// belajar data types
/* The operating system allocates memory and selects what will be stored in the
reserved memory based on the variable's data type. The data type defines the
proper use of an identifier, what kind of data can be stored, and which types of
operations can be performed.
*/
int if (structure) { cout << 'masih muda' << endl; }

// data types
55 +
        15 // legal c++ expression
           // Both operands of the + operator are integeras

        55 +
        "john" // ilegal
        // the + operator is not defiined for integer and string

        /*-------------------------------------------------------*/

        // belajar numeric data types

        /*-------------------------------------------------------*/

        /* belajar boolean*/
        // nilainya ada dua, yaitu TRUE(1) dan FALSE(0).

        10 ==
    10 // berarti ini true

    /*-------------------------------------------------------*/

    /* Belajar integer */

    /*Several of the basic types, including integers, can be modified using one
or more of these type modifiers: signed: A signed integer can hold both negative
and positive numbers. unsigned: An unsigned integer can hold only positive
values. short: Half of the default size. long: Twice the default size.*/

    int a = 42;
unsigned long int a;

/* Belajar floating point numbers*/

/*A floating point type variable can hold a real number, such as 420.0, -3.33,
or 0.03325. The words floating point refer to the fact that a varying number of
digits can appear before and after the decimal point. You could say that the
decimal has the ability to "float".

There are three different floating point data types: float, double, and long
double.

In most modern architectures, a float is 4 bytes, a double is 8, and a long
double can be equivalent to a double (8 bytes), or 16 bytes. For example:*/

double temp =
    4.249 // floating point data types are alwayds signed which means that
          // valuer have the capability to holda positive and negative values

// belajar string, char, dan bool

// 1. strings>

#include <string>
    using namespace std;

int main() {
  string a = 'i am learning C++';
  return 0;
}

// characters, misalnya:

char test = 'S';
char var = 'z';

// booleans, misal:

bool online = false;
bool logged_in = true

    /*----------------------------*/

    // variable naming rules

    /*Use the following rules when naming variables:
- All variable names must begin with a letter of the alphabet or an underscore(
_ ).
- After the initial letter, variable names can contain additional letters, as
well as numbers. Blank spaces or special characters are not allowed in variable
names.

There are two known naming conventions:
Pascal case: The first letter in the identifier and the first letter of each
subsequent concatenated word are capitalized. For example: BackColor Camel case:
The first letter of an identifier is lowercase and the first letter of each
subsequent concatenated word is capitalized. For example: backColor

C++ keyword (reserved word) cannot be used as variable names.
For example, int, float, double, cout cannot be used as a variable name.
*/

    // Case-Sensitivity

    /*C++ is case-sensitive, which means that an identifier written in uppercase
is not equivalent to another one with the same name in lowercase. For example,
myvariable is not the same as MYVARIABLE and not the same as MyVariable. These
are three different variables.
Choose variable names that suggest the usage, for example: firstName,
lastName.*/

    // Belajar Array

    /*An array is used to store a collection of data, but it may be useful to
think of an array as a collection of variables that are all of the same type.
Instead of declaring multiple variables and storing individual values, you can
declare a single array to store all the values. When declaring an array, specify
its element types, as well as the number of elements it will hold. For
example:*/

    int a[5];

/*In the example above, variable a was declared as an array of five integer
values [specified in square brackets]. You can initialize the array by
specifying the values it holds:*/

int b[5] = {11, 45, 62, 70, 34};

/*The values are provided in a comma separated list, enclosed in {curly
 * braces}*/

// Multi dimesinsonal arrays

/*Multi-dimensional arrays may be initialized by specifying bracketed values for
each row. Following is an array with 2 rows and 3 columns:*/

int x[2][3] = {
    {2, 3, 4}, // 1st row
    {8, 9, 10} // 2nd row
};
// bisa ditulis seperti ini juga:
int x[2][3] = {{2, 3, 4}, {8, 9, 10}};

// contoh:
int x[2][3] = {{2, 3, 4}, {8, 9, 10}};
cout << x[0][2]
     << endl

            // arrays can contain an unlimited number of dimensions
            string threeD[42][8][3]

    // Pengenalan Pointers
    /* Every variable is a memory location, which has its address defined.
That address can be accessed using the ampersand (&) operator (also called the
address-of operator), which denotes an address in memory. Fore Example: */

    int score = 5;
cout << &score << endl;

// tanda "&" atau ampersand operator

// What is pointer ? A data type that contains an adress
/*A pointer is a variable, and like any other variable, it must be declared
before you can work with it. The asterisk sign is used to declare a pointer (the
same asterisk that you use for multiplication), however, in this statement the
asterisk is being used to designate a variable as a pointer.
Following are valid pointer declarations:*/

int *ip;    // pointer to an integer
double *dp; // pointer to a double
float *fp;  // pointer to a float
char *ch;   // pointer to a character

// using pointers

int score = int * scorePtr;
scorePtr = &score;

cout << scorePtr << endl;

/* Pointer Operations

There are two operations for pointers, address of operator (&): returns the
memory address of its operand. Contents of (or dereference) operator (*):returns
the value of the variable located at the address specified by its operand.
Example:
*/

int var = 50;
int *p;
p = &var;

cout << var << endl;
// Outputs 50 (the value of var)
cout << p << endl;
// Outputs 0x29fee8 (var's memory location)

cout << *p << endl;
// Outputs 50 (the value of the variable stored in the pointer)

/* Dereferencing

The dereference operator (*) is basically an alias for the variable the pointer
points to. For example:*/

int x = 5;
int p = &x;
x = x + 4;
x = *p + 4;
*p = *p + 4;

// Dynamic Memory
// Dynamic memory can also be allocated fora arrays. For example:

int *p = NULL;   // Pointer initialized with null
p = new int[20]; // Minta memory
delete[] p;      // Hapus array dari pointed by p

// Materi sizeof

/*While the size allocated for varyving types depends on the architecture
  of the computer you use to run your programs, C++ does guarantee a minimum
  size for the basic data types?*/

/*The sizeof operator can be used to get a variable or data type's size, in
bytes. Example Syntax:*/
sizeof(data type)

    /*The size of operator determines and returns the size of either a type or a
variable in bytes. Example:*/

    cout
    << "char: " << sizeof(char) << endl;
cout << "int: " << sizeof(int) << endl;
cout << "float: " << sizeof(float) << endl;
cout << "double: " << sizeof(double) << endl;
int var = 50;
cout << "var: " << sizeof(var) << endl;

// Outputs values may var, according to the computer and compiler used.

// Materi if size of an array
/*The C++ sizeof operator is also used to determine the size of an array.
For example: */

double myArr[10];
cout << sizeof(myArr) << endl;

/* Dalam mesin kita, double mengambil 8 bytes(b). Array menyeetor 10 doubles,
jadi tinggal dikali saja menjadi 8 * 10 = 80 bytes di memory

In addition, divide the total number of bytes in the array by the number of
bytes in a single to learn how many elements you have in the array.
For example*/

int numbers[100];
cout << sizeof(numbers) / sizeof(number[0]);

// Defining a function
/*As an example, lets define a function that does not return a value, and just
prints a line of text to the screen. Example: */

void printSomething() { cout << "Hi there!"; }

/*Our function, entitled printSomething, returns void and has no parameters. We
 * can use our function in main()*/

int main() {
  printSomething();
  return 0;
}

// Functions
// You must declare a function prior to calling it. Example:
//
#include <iostream>
using namespace std;

void printSomething() { coutf << "Hi there"; }

int main() {
  printSomething();
  return 0;
}

// A functions declaration, or function prototype, tells then compiler about a
// function name and how to call the function. the actual body of the function
// can be defined separately. For example:

#include <iostream>
using namespace std;

// function declaration

void printSomething();

int main() {
  printSomething();
  return 0;
}

void some_func();
int main() {}

// Function Parameters

// For a function to use arguments, it must declare formal parameters which are
// variables that accept the argument's values. For example

void printSomething(int x) { cout << x; }

// this defines a funcvtion that takes one integer parameter and print is value.
// For example:

// Function parameters
// Once parameters have been defined, you can pass corresponding arguments when
// the functionl is called. For example:

#include <iostream>
using namespce std;

void printSomething(int x) { cout << x; }

int main() { printSomething(42); }
// the value 42 is passed to the function as an argument, and is assigned to the
// formal parameter of the function:x.

// You can pass different arguments to the same function. For Example:

int timesTwo(int x) { return z * 2; }

int main() {
  cout << timesTwo(8);
  cout << timesTwo(5);
  cout << timesTwo(42);
}

// Multiple Parameters
// you can define as many parameters as you want for your functions, by
// separating them withh commas. Example:

int addNumbers(int x, int y) {
  // code
}

// As defined, the addNumbers function takes two parameters of type int, and
// return int. Example

int hello(int a, int b) {
  int result = a + b;
  return result;
}

// function on multiple parameters

int addNumbers(int x, int y) {
  int result = x + y;
  return result;
}

int main() { cout << addNumbers(50, 25) }

// We can also assign the returned value to a variable.

int main() {
  int x = addNumbers(20, 2);
  cout << x;
}
// other example

int addNumbers(int x, int y) { return x + y; }
int main() {
  int result = addNumbers(43, 86);
  cout << result << endl;
  return 0;
}

// we can add as many parameters to a single function as you want. For example:
int addNumbers(int x, int y.int z, int a) {
  int result = x + y + z + a;
  return result;
}

// Materi Random Numbers
/* Being able generate random numbers is helpful in a number situations,
including when creating games, statistical modeling programs, and similar
endproducts.
In the C++ standard libarary, you can access a pseudo random number generator
function thats called rand(). When used, we are required to include the header
<cstdlib>. For example: */

#include <cstdlib>
#include <iostream>
using namespace std;

int main() { cout << rand(); }
// this will output a random number(hasilnya)

// Random Numbers
// A for loop can be used to generate multiple random numbers. Contoh penggunaan
// rand:

int main() {
  for (int x = 1; x <= 10; x++) {
    cout << rand() << endl;
  }
}

// Use the modulo(% operator to generate random numbers within a spesific range.
// The example below generates whole numbers within a range of 1 to 6.

int main() {
  for (int x = 1; x <= 10; x++) {
    cout << 1 + (rand() % 6) << endl;
  }
}

// srand() function
// The srand() function is used to generate truly random numbers. this function
// allows to specify a seed value as its parameter, which is used for the rand(
// function's algorithm. Example:

int main() {
  srand(98);

  for (int x = 1; x <= 10; x++) {
    cout << 1 + (rand() % 6) << endl;
  }
}

// Truly random numbers
/*A solution to generate truly numbers, is to use the current time as a seed
 * value for the srand() function. THis example makes use of the time() function
 * to get the number of seconds on your system time, and randomly seed the
 * rand() function (we need to inclued the <ctime> header for it) Example:*/

#include <cstdlib>
#include <ctime>
#include <iostream>
using namespace std

    int
    main() {
  srand(time(0));

  for (int x = 1; x <= 10; x++) {
    cout << 1 + (rand() % 6) << endl;
  }
}

// time(0) will return the current second count, prompting the srand() function
// to set a different seed for the rand() function each time the program runs.

// Default Values for Parameters
/*When defining a function, you can specify a default value for each of the last
 parameters/ If the corresponding argument is missing when you call a function,
 it uses the default value. To do this, use the assigment operator to assign
 values to the arguments in the c=function definition, as shown in this
 example.*/

int sum(int a, int b = 42) {
  int result = a + b;
  return (result);
}

// This assigns a default value of 42 to the b parameter. If we call the
// function without passing the value for the b parameter, the default value
// will be used.

int main() {
  int x = 24;
  int y = 36;

  // calling the function with both parameters
  int result = sum(x, y);
  cout << result << endl;

  // calling the function without b
  int result = sum(x);
  cout << result << endl;

  return 0;
}

// Default arguments
// Another example:

int volume(int l = 1, int w = 1, int h = 1) { return l * w * h; }

int main() {
  cout << volume() << endl;
  cout << volume(5) << endl;
  cout << volume(2, 3) << endl;
  cout << volume(3, 7, 6) << endl;
}
// Overloading
// Function overloading allows to create multiple functions with the same name,
// so long as they have different parameters. For example, you might need a
// printNumber() function that prints the value of its parameter.

void printNumber(int a) { cout << a; }

// This is effective with integer arguments only. Overloading it will make it
// available for other types, such as floats.

void printNumber(float a) { cout << a; }

// Function Overloading
/*When overloading functions, the definition of the function must differ from
 * each other by the types and/or the number of arguments in the argument list.
 * For example:*/

void printNumber(int x) { cout << "Prints an integer: " << x << endl; }
void printNumber(float x) { cout << "Prints a float: " << x << endl; }
int main() {
  int a = 16;
  float b = 54.541;
  printNumber(a);
  printNumber(b);
}
/*We can see, the function call is based on the argument provided. An integer
 * argument will call the function implementation that takes an integer
 * parameter. A float argument will call the implementation taking a float
 * parameter. */

// Latihan dari saya

int main() {
  float a = 23.234;
  int b = 12;
  float c = 12.456;
  printNumber(a);
  printNumber(b);
  printNumber(c);
}

// Function Overloading
/* You can not overload function declarations that differ only by return type.
 * The following declaration results in an error. */

int printName(int a) {}
float printName(int b) {}
double printName(int c) {}

// Recursion
/*A recursive function in c++ isk a function thnat calls itself. To avoid having
 * the recursion run identifinitely, we must incude a termination condition. */
/*Latihan recursion dengan memanggil fungsi faktorial*/

int factorial(int n) {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
int main() { cout << factorial(5); }
// Keep in mind thant a base case is necessary for real recursion. Without it,
// the recursion will keep running forever.

// Arrays and Functions
/*An array can also be passed to a */

#include <iostream>
using namespace std
cout << "Hello World" << endl

// Arrays and functions
/*An array can also be passed to a function as an argument. The parameter should be defined as an array using square brackets, when declaring the function. 
 For example*/

void printArray(int arr[], int size) {
  for(int x=0; x<size; x++) {
    cout << arr[x]; 
  }
}

// Arrays and functions 
/*We can use our function in main(), and call it for our sample array: */

void printArray(int arr[], int size) {
  for(int x = 0; x < size; x++) {
    cout << arr[x] << endl; 
  }
}
int main() {
  int myArr[3] = {42, 33 ,88}; 
  printArray(myArr, 3); 
}

// The printArray function takes an array as its parameter(int arr[]), and iterates over the array using a for loop. We call the function in main(), which is where we pass the myArr array to the function, which print its elements. Remember to specofy the array's name without square brackets when passing it as an argument to a function. 

//----------------------------------------

// Function Arguments
/*There are two ways to pass arguments to a function as the function is being called. 

- By value: This method copies the argument's actual value into the formal parameter. Here, we can make changes to the parameter within the function withoutj having any effect on the argument. 

- By reference: This method copies the argument's reference into the formal parameter. Within the function, the reference is used to access the actual argument used in the call. This means that any change made to lthe parameter affects the argument. By default, C++ uses call by value to pass arguments. */

// Passing by value
/*By default, arguments in C++ are passed by value. When passed by value, a copy of the argument is passed to the function. 
Example: */

void myFunc(int x) {
  x = 100;
}

int main() {
  int var = 20;
  myFunc(var);
  cout << var; 
}

// Passing by reference

/*Pass-by-reference copies an argument's addres into the formal parameter. Inside the function, the address is used to access the actual argument used in the call. This means that changes made to the parameter affect the argument. To pass the value by reference, argument pointers are passed to the functions just like any other value. */

void myFunc(int *x) {
  *x = 100;
}

int main() {
  int var = 20; 
  myfunc(&var);
  cout << var; 
}

/*As you can see, we passed the variable directly to the function using the address-of operator &.
The function declaration says that the function takes a pointer as its parameter(defined using the * operator). As a result, the function has actually the argument's value, sa accessed it via the pointer.*/

// Summary

/*Passing by value: This method copies the actual value of an argument into the formal parameter of the function. In this case, changes made to the parameter inside the function have no effect on the argument.

Passing by reference: This method copies the reference of an argument into the formal parameter. Inside the function, the reference is used to access the actual argument used in the call. So, changes made to the parameter also affect the argument. In general, passing by value is faster and more effectiv. Pass by reference when your function needs to modify the argument, orl when you need to pass a data type, that uses a lot of memory and is expensive to copy. */

// What is an object? 

/*Object Oriented Programming is a programming style that is intended to make thinking about programming closer to thinking about thejreal World
 * In programming ,objects are independen units, and each has its own identity, just as objcets in the real world do. */

//Objects

/*An object might contain other objects but they're still different objcets. 

Objects also have characteristics that are used describe them. For example, a car can be red or blue, a mug can ben full or empty, and so on. These characteristics are also called attributes. An attribute dscribes the the current state of an object. Objects can have multiple attributes (the mug can be empty, red and large). */

/*In the real world, each object behaves in its own way. The car moves*/
