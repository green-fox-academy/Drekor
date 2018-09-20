#include "function.h"

void carInfo (car autoC)
{
    if (autoC.type == TESLA)
    {
        printf("KM: %lf",autoC.km);
    }
    else
    {
        printf("gaslvl: %.3lf, KM: %.3lf",autoC.gas ,autoC.km);
    }
}
