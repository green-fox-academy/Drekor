#include "function.h"

int get_older_cars_than (car * arrayInput, int mySize, int age)
{
    int counter = 0;

    for (int i = 0; i < mySize; i++)
    {
        if(arrayInput[i].yearOfManufacture < age)
        {
            counter++;
        }
    }
    return counter;
}

int get_transmission_count(car* arrayInput, int mySize,transmission trnsm)
{
    int temp = 0;

    for (int i = 0; i < mySize; i++)
    {
        if(arrayInput[i].type == trnsm)
        {
            temp++;
        }
    }
    return temp;
}
