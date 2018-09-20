#include "function.h"

int getFasterPokemons (pokemon * poki, int length, int speed)
{
    int fasterThanInputSpeed = 0;

    for (int i = 0; i < length; i++)
    {
        if (poki[i].speedOfThePokemon > speed)
        {
            fasterThanInputSpeed++;
        }
    }
    return fasterThanInputSpeed;
}

int getTypeCount (pokemon * poki, int length, typeOfThePokemon type)
{
    int sameTypeCounter = 0;

    for (int i = 0; i < length; i++)
    {
        if (poki[i].type == type)
        {
            sameTypeCounter++;
        }
    }
    return sameTypeCounter;
}

typeOfThePokemon getTheStrongestOne (pokemon * poki, int length, int strength)
{
    int temp = 0;
    typeOfThePokemon typeTemp = poki[0].type;

    for (int i = 0; i < length; i ++)
    {
        if (poki[i].strengthOfThePokemon > strength)
        {
            typeTemp = poki[i].type;
        }
    }
    return typeTemp;
}


/* 4) Get maximal strength of a type
 *      - parameters:
 *          - array
 *          - array length
 *          - type
 *      - it returns the highest strength among the "type" type pokemons
 */
//Don't forget to handle invalid inputs (NULL pointers, invalid values etc.)
