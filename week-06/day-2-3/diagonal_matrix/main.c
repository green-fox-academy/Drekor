#include <stdio.h>
#include <stdlib.h>

// - Create (dynamically) a two dimensional array
//   with the following matrix. Use a loop!
//
//   1 0 0 0
//   0 1 0 0
//   0 0 1 0
//   0 0 0 1
//
// - Print this two dimensional array to the output

int main()
{

    int matrix[10][10];

    for (int i = 0; i < 4; i++)
    {
        for(int j = 0; j < 4 ; j++)
        {
            if (i == j)
            {
                matrix[i][j] = 1;
            }
            else
            {
                matrix[i][j] = 0;
            }
            printf("%d ",matrix[i][j]);
        }
        printf("\n");
    }
    return 0;
}
