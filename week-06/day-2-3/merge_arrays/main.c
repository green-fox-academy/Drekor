#include <stdio.h>
#include <stdlib.h>

// please allocate a 10 long array and fill it with even numbers
// please allocate a 10 long array and fill it with odd numbers
// select an array, and push the elements into the another array
// print it the array in descending order
// delete the arrays after you don't use them

int main()
{
    int* pointerForEvens = NULL;
    pointerForEvens = (int *) malloc (10* sizeof(int));

    int even = 0;
    int temp = 0;

    for(int i = 0; i < sizeof(pointerForEvens)+2; i++)
    {
        pointerForEvens[i] = even;
        even += 2;
        printf("%d\n",pointerForEvens[i]);
    }

    int* pointerForOdds = NULL;
    pointerForOdds = (int *) malloc (10* sizeof(int));

    int odds = 1;

    for(int i = 0; i < sizeof(pointerForOdds)+2; i++)

    {
        pointerForOdds[i] = odds;
        odds += 2;
        printf("%d\n",pointerForOdds[i]);
    }

    free(pointerForEvens);
    free(pointerForOdds);
    return 0;
}
