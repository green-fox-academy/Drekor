#include "function.h"

int sum (int * myint)
{

    int temp;

    for (int i = 0; i < myint; i++)
    {
        temp += i;
    }
    printf("%d\n",temp);
    return 0;
}

