#include <stdio.h>
#include <string.h>

typedef enum {VOLVO, TOYOTA, LAND_ROVER, TESLA} car_type;

typedef struct
{
    car_type type;
    double km;
    double gas;
} car;

void carInfo (car autoC);
