#include "function.h"


void calculateIfItsWorth (house * pointedHouse)
{

    float calculated = pointedHouse->theAreaOfTheHouseInSquareMeters * 400;

    if (pointedHouse->priceInEUR <= calculated)
    {
        printf("Its Okay!\n");
    }
    else
    {
        printf("NO way!\n");
    }
}

int numberOfWorth (house * hs, int length)
{

    for (int i = 0; i < length; i++)
    {
        calculateIfItsWorth(&hs[i]);
    }
    return;
}
