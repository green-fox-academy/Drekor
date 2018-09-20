#include "function.h"

int main(int argc, char ** argv)
{

    printf("Command Line Todo application\n"
           "=============================\n\n"
           "Command line arguments:\n"
           "-l         Lists all the tasks\n"
           "-a         Adds a new task\n"
           "-r         Removes an task\n"
           "-c         Completes an task\n\n");

    if (!strcmp(argv[1],"-a"))
    {

        char * wholeString;
        wholeString = (char *) malloc (100 * sizeof(char));

        for (int i = 2; i < argc ; i++)
        {
            strcat(wholeString,argv[i]);
            if (i != argc-1 )
            {
                strcat(wholeString," ");
            }
        }

        addToAFile(wholeString);
    }

    else if (!strcmp(argv[1],"-l"))
    {
        listAllTheTasks();
    }
    else if (!strcmp(argv[1],"-r"))
    {
        removeTasks(argv[2]);
    }

    return 0;
}
