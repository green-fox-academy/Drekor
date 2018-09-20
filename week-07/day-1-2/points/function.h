#include <stdio.h>
#include <stdlib.h>
#include <math.h>

typedef struct
{
    float x;
    float y;

} points;

points createPoint (float firstPoint,float secondPoint);

float distance(points p1, points p2);

