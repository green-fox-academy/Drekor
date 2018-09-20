#include "function.h"
#include <string.h>
/*
Create a struct that represents a pirate
It should store:
 - name
 - an int value which tells us if he/she has a wooden leg?
 - gold count
Create a function that takes an array of pirates (and it's length) then returns the sum of the golds of all pirates
Create a function that takes an array of pirates (and it's length) then returns the average of the gold / pirate
Create a function that takes an array of pirates (and it's length) then returns the name of the
richest that has wooden leg
*/


int main()
{
    Pirate firstPirate;
    strcpy(firstPirate.name,"Beer");
    firstPirate.has_wooden_leg = 1;
    firstPirate.gold_count = 10;

    Pirate secondPirate;
    strcpy(secondPirate.name,"Whiskey");
    secondPirate.has_wooden_leg = 0;
    secondPirate.gold_count = 20;

    Pirate thirdPirate;
    strcpy(thirdPirate.name,"Vodka");
    thirdPirate.has_wooden_leg = 1;
    thirdPirate.gold_count = 0;

    Pirate group[] = {firstPirate,secondPirate,thirdPirate};
    int sizeOfGroup = sizeof(group)/sizeof(Pirate);

    printf("the group has %d gold!\n",sumOfAllGolds(group,sizeOfGroup));
    printf("Group / ppl has %.2f gold!\n",sumOfAllGoldsForPpl(group,sizeOfGroup));
    printf("the richest is %s\n",theBaddestAss(group,sizeOfGroup));

    return 0;
}
