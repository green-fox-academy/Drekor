#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main()
{
    // Write a program that reads a number from the standard input, then draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as the number was

    int triangleHeight;

    printf("how tall?\n");
    scanf("%d",&triangleHeight);

    char stars[100] = "*";

    for(int i = 0; i < triangleHeight; i++)
    {
        printf("%s\n",stars);
        strcat(stars,"*");
    }
    return 0;
}
