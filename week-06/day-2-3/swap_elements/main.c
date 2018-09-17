#include <stdio.h>
#include <stdlib.h>

// - Create an array variable named `abc`
//   with the following content: `["first", "second", "third"]`
// - Swap the first and the third element of `abc` by using a function
// - That function should take an array as a parameter and return the correct array

int main()
{
    char * abc[] = {"first", "second", "third"};

    swapNumbers(abc);

    return 0;
}

void swapNumbers (char ** inputA)
{
    char newArray[4];

    for (int j = 0; j< 3; j++)
    {
        for (int i = 2; i >= 0 ; i--)
        {
            if (i == i)
            {
                newArray[j] == inputA[i];
            }
        }
        printf("%s\n",newArray[j]);
    }
}


