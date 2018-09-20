#include "function.h"

// Write a function called "GetSurface" that takes a RectangularCuboid
// and returns it's surface
// Write a function called "GetVolume" that takes a RectangularCuboid
// and returns it's volume

int main()
{
    rectangular_cuboid cubi;
    cubi.a = 10;
    cubi.b = 7.3;
    cubi.c = 6;

    printf("Cubi surface area is: %.2lf\n",getSurface(cubi));
    printf("Cubi volume is: %.2lf\n",getVolume(cubi));

    return 0;
}
