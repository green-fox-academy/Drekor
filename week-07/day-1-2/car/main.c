#include "function.h"

// Write a function that takes a car as an argument and prints all it's stats
// If the car is a Tesla it should not print it's gas level

int main()
{
    car autoC;
    autoC.gas = 12.5;
    autoC.km = 60.9;
    autoC.type = TESLA;

    carInfo(autoC);

    return 0;
}
