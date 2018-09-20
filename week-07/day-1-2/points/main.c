#include "function.h"

/*
Create a point struct which has two float variables: x and y
Create a function that constructs a point
It should take it's x and y coordinate as parameter
Create a function that takes 2 points and returns the distance between them
Example:
int main()
{
	point_t p1 = create_point(1, 1);
	point_t p2 = create_point(1, 5.5);
	float dist = distance(p1, p2);
	printf("%f", dist);
	return 0;
}
*/

int main()
{
    points myFirstPoints = createPoint(22,33);
    points mySecondPoints = createPoint(33,22);

    printf("%.2f %.2f\n",myFirstPoints.x,myFirstPoints.y);
    printf("%.2f %.2f\n",mySecondPoints.x,mySecondPoints.y);

    printf("the distance between the coords is: %.2f\n",distance(myFirstPoints, mySecondPoints));
	return 0;
}
