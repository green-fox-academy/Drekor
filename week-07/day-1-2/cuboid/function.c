#include "function.h"

float getSurface (rectangular_cuboid rect)
{
    float theSurface = 2 * (rect.a * rect.b + rect.b * rect.c + rect.c * rect.a);
    return theSurface;
}

float getVolume (rectangular_cuboid rect)
{
    float theVolume = rect.a * rect.b * rect.c;
    return theVolume;
}
