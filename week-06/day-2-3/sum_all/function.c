#include "function.h"

void sumOfTheElements (int * inputA, int elements )
{
    int sum = 0;

    for (int i = 0; i < elements; i++)
    {
        sum += inputA[i];

    }
        printf("%d\n",sum);
}
