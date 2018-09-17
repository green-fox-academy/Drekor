#include "function.h"

void doublingArrays (int array[])
{
    for (int i = 0; i < sizeof(array)/sizeof(array[0]); i++)
    {
        array[i] = array[i] *2;
    }
    //printf("%d\n", array[1]);
}
