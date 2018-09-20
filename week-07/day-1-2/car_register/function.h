#include <string.h>
#include <stdio.h>

typedef enum {  MANUAL,
                AUTOMATIC,
                CVT,SEMI_AUTOMATIC,
                DUAL_CLUTCH
              } transmission;

typedef struct
{

    transmission type;
    char theManufacturerName[256];
    float priceOfTheCar;
    int yearOfManufacture;

} car;

int get_older_cars_than (car * arrayInput, int mySize, int age);

int get_transmission_count(car* arrayInput, int mySize,transmission trnsm);
