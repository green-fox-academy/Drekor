#include <stdio.h>
#include <stdlib.h>

// with malloc
// please allocate a 10 long array and fill it with even numbers then print the whole array
// please deallocate memory without using free


int main()
{
    int* pointer = NULL;
    int evenNumber = 0;

    pointer = (int *) malloc (10 * sizeof(int));

    for (int i = 0; i < 10*sizeof(pointer); i++) {
        pointer[i] = evenNumber;
        evenNumber+= 2;
    }

    for (int i = 0; i < 10; i++) {
        printf("%d\n",pointer[i]);
    }

    free(pointer);

    return 0;
}
