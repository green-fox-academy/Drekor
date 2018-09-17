#include "function.h"

void appendA (char animals[3][6])
{

    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 5; j++)
        {
            if (animals[i][j] == '\0')
            {
                animals[i][j] = 'a';
                animals[i][j+1] = '\0';
            }
        }
        printf("%s\n", animals[i]);
    }
}
