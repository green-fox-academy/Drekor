#include "function.h"

points createPoint (float firstPoint,float secondPoint)
{
    points p1;

    p1.x = firstPoint;
    p1.y = secondPoint;

    return p1;
}

float distance(points p1, points p2){
    float distance = sqrtf(powf((p1.x-p2.x),2) + powf(p1.y-p2.y,2));
    return distance;
}
