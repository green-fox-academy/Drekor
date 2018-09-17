#include <stdio.h>
#include <stdlib.h>
#include <string.h>

//Print out the addresses with and without pointer
//print out the values with and without pointer

int main()
{
    int number = 2017;
    float Pi = 3.14;
    char letter = 't';

    int * numberPointer = &number;
    float * PiPointer = &Pi;
    char * letterPointer = &letter;

    printf("%p %p %p\n",numberPointer,PiPointer,letterPointer);
    printf("%p %p %p\n",&number,&Pi,&letter);
    printf("%d %.2f %c\n",*numberPointer,*PiPointer,*letterPointer);
    printf("%d %.2f %c\n",number,Pi,letter);

    return 0;
}
