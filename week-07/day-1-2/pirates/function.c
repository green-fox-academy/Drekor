#include "function.h"

int sumOfAllGolds (Pirate * arrayInp, int mylist)
{
    int sumGold = 0;

    for (int i = 0; i < mylist; i++)
    {
        sumGold += arrayInp[i].gold_count;
    }
    return sumGold;
}

float sumOfAllGoldsForPpl (Pirate * arrayInp, int mylist)
{
    int sumGold = sumOfAllGolds(arrayInp,mylist);
    float average = 0;

    average = sumGold / mylist;

    return average;
}

char * theBaddestAss (Pirate * arrayInp, int mylist)
{
    char * name = arrayInp[0].name;
    int gold = arrayInp[0].gold_count;

    for (int i = 1; i < mylist; i++)
    {
        if (arrayInp[i].gold_count > gold && arrayInp[i].has_wooden_leg == 1)
        {
            gold = arrayInp[i].gold_count;
            name = arrayInp[i].name;
        }
    }
    return name;
}
