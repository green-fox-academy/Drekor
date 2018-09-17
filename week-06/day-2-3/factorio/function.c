#include "function.h"

int factorio (int * fkt)
{
    int result = 1;

    for (int i = 1 ; i <= fkt; i ++)
    {
        result *= i;
    }

    //printf("%d\n",result);

    return result;
}
