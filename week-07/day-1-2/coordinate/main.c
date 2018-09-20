#include "function.h"

// Create a struct to store coordinates (for example: int x and int y)
// Create an array which can store coordinates, do not create multidimensonal arrays here
// Fill up the coordinates in the array with random number.

int main()
{
    coordinates storeArray[10];

    for (int i = 0; i < sizeof(storeArray)/sizeof(coordinates); i++)
    {
        storeArray[i].x = i * 2;
        storeArray[i].y = i * 5;

        printf("The coords is: %d %d \n",storeArray[i].x,storeArray[i].y);
    }
    return 0;
}
