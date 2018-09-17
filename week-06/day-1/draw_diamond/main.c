#include <stdio.h>
#include <stdlib.h>

int main()
{
    // Write a program that reads a number from the standard input, then draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as the number was

    int standardInput = 19;

    int firstPiramidLength = (standardInput / 2) + 1;
    int secondPiramidLength = standardInput / 2;
    int tempForSpace = 2;
    int tempForStar = (standardInput / 2) - 1;

    for (int i = 0; i < firstPiramidLength; i++)
    {
        char diamond[100] = "";
        for (int j = 0; j < firstPiramidLength - i; j++)
        {
            strcat(diamond," ");
        }

        for(int k = 0; k <= i; k++)
        {
            if(k == 0)
            {

                strcat(diamond,"*");

            }
            else
            {
                strcat(diamond,"**");
            }
        }
        printf("%s\n",diamond);
    }

    for (int i = 0; i < secondPiramidLength; i++)
    {
        char diamond[100] = "";
        for (int j = 0; j < tempForSpace; j++ )
        {
            strcat(diamond," ");
        }

        for(int k = 0; k <= tempForStar; k++ )
        {
            if(k == 0)
            {
                strcat(diamond,"*");
            }
            else
            {
                strcat(diamond,"**");
            }
        }
        printf("%s\n",diamond);
        tempForSpace++;
        tempForStar--;
    }

    return 0;
}
