#include "function.h"

/*
Create a sandwich struct
It should store:
 - name
 - price (float)
 - weight (float)
Create a function which takes two parameters and returns the price of your order.
The parameters should be:
 - a sandwich struct
 - and an integer that represents how many sandwiches you want to order
*/

int main()
{

    sandwich hambi;

    hambi.name[50] = "asd";
    hambi.price = 1.99;
    hambi.weight = 0.5;

    int howManySandwiches = 2;

    printf("Your sandwich price is %.2f \n",calculator(hambi,howManySandwiches));

    return 0;
}


