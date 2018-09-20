#include "function.h"

#define PI 3.14

float radiusOfACircle (radius)
{

    float area = radius * radius * PI;

    printf("%.2f\n",area);

}

float circumferenceOfCircle(radius)
{

    float circumference = 2 * radius * PI;

    printf("%.2f\n",circumference);

}
