#include "function.h"

/* Write a car register!
 * You should store the following data in a structure, called "car":
 *  - the manufacturer's name (which is shorter than 256 characters)
 *  - the price of the car (in euros, stored as a floating point number)
 *  - the year of manufacture
 *  - the type of the transmission (as a custom type, see below)
 *
 * You should store the transmission type in an enumeration ("transmission"),
 * the valid types are:
 *  - manual
 *  - automatic
 *  - CVT
 *  - semi-automatic
 *  - dual-clutch
 *
 * The "car"-s are stored in an array.
 *
 * Write the following functions:
 *  - get_older_cars_than(struct car* array, int array_length, int age)
 *      - it returns the count of the older cars than "age"
 *  - get_transmission_count(struct car* array, int array_length, enum transmission trnsm)
 *      - it returns the count of cars which has "trnsm" transmission
 */

int main()
{

    car autoCar1;
    strcpy(autoCar1.theManufacturerName,"LADA");
    autoCar1.priceOfTheCar = 250;
    autoCar1.yearOfManufacture = 1990;
    autoCar1.type = MANUAL;

    car autoCar2;
    strcpy(autoCar2.theManufacturerName,"OPEL");
    autoCar2.priceOfTheCar = 500;
    autoCar2.yearOfManufacture = 2000;
    autoCar2.type = SEMI_AUTOMATIC;

    car autoCar3;
    strcpy(autoCar3.theManufacturerName,"SKODA");
    autoCar3.priceOfTheCar = 1000;
    autoCar3.yearOfManufacture = 1999;
    autoCar3.type = AUTOMATIC;

    car autoCar4;
    strcpy(autoCar4.theManufacturerName,"BMW");
    autoCar4.priceOfTheCar = 2500;
    autoCar4.yearOfManufacture = 2010;
    autoCar4.type = MANUAL;

    car garage[] = {autoCar1,autoCar2,autoCar3,autoCar4};
    int sizeOfArray = sizeof(garage)/sizeof(car);

    printf("the older ones number is: %d\n",get_older_cars_than(garage,sizeOfArray,2000));
    printf("the trnsm users number is: %d\n",get_transmission_count(garage,sizeOfArray,MANUAL));

    return 0;
}
