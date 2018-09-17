#include <stdio.h>
#include <string.h>

// Write a program that opens a file called "my-file.txt", then prints
// each of lines form the file.
// You have to create the file, you can use C-programming but it is not mandatory

int main ()
{

int num;
    FILE *fptr;
    fptr = fopen("my-file.txt", "w");

    fprintf(fptr,"this is my first line!\n");

    fclose(fptr);

    fptr = fopen("my-file.txt", "r");

    char line[100];

    while (!feof(fptr)) {
        fgets(line, 100, fptr);

        printf("%s", line);
    }

    fclose(fptr);

    return 0;
}
