#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    // Write a program that reads a number from the standard input, then draws a
// pyramid like this:
//
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as the number was

    int standardInput = 4;
    int temp = standardInput;
    int tempForStars = 0;

    for (int i = 0; i < standardInput; i++)
    {
        char pyramid[100] = "";

        for(int j = 0; j<temp ;j++)
        {
            strcat(pyramid," ");
        }
        for(int k = 0; k <= tempForStars; k++)
        {
            if(k == 0)
            {
                strcat(pyramid,"*");
            }
            else
            {
                strcat(pyramid,"**");
            }
        }

        temp--;
        tempForStars++;
        printf("%s\n",pyramid);
    }

    return 0;
}
