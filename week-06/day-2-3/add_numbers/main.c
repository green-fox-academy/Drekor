#include <stdio.h>
#include <stdlib.h>

//Add two numbers using pointers

int main()
{
    int a = 20;
    int b = 17;
    int c;

    int * a_pointer = &a;
    int * b_pointer = &b;

    c = *a_pointer + *b_pointer;

    printf("%d\n",c);

    return 0;
}
