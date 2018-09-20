#include "function.h"

void addToAFile (char * inputName)
{
    FILE *fptr;
    fptr = fopen("todo.txt", "a");
    fprintf(fptr,"%s\n",inputName);
    fclose(fptr);

    printf("Your new task is added to the list!\n\n");
}

void listAllTheTasks ()
{
    int temp =1;


    FILE *fptr;
    fptr = fopen("todo.txt", "r");
    char singleLine[150];

    while(fgets(singleLine,150,fptr) != NULL)
    {
        printf("%d - %s",temp,singleLine);
        temp++;
    }

    if (temp == 1)
    {
        printf("No todos for today! :)\n");
    }

    fclose(fptr);
}

void removeTasks (char * inputName)
{
    int temp = 0;

    FILE *fptr;
    fptr = fopen("todo.txt", "r+");

    FILE *fptrTemp;
    fptrTemp = fopen("myTodoTemp.txt", "a");

    char singleLine[150];

    while(fgets(singleLine,150,fptr) != NULL)
    {
        temp++;

        if (temp != atoi(inputName))
        {
            fprintf(fptrTemp,"%s",singleLine);
        }
    }
    rename("myTodoTemp.txt","todo.txt");

    fclose(fptrTemp);
    fclose(fptr);

}
