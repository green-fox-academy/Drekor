#include <stdio.h>

typedef struct
{
    char name[256];
    int has_wooden_leg;
    short int gold_count;

} Pirate;

int sumOfAllGolds (Pirate * arrayInp, int mylist);
float sumOfAllGoldsForPpl (Pirate * arrayInp, int mylist);
char * theBaddestAss (Pirate * arrayInp, int mylist);
