#include "function.h"

// Use the Computer struct, give values to the fields and print them out in the main!
// Use the Notebook struct, give values to the fields and print them out in the main!

int main()
{
    Notebook notebook;

    notebook.cpu_speed_GHz = 3.2;
    notebook.ram_size_GB = 16;
    notebook.bits = 8;

    printf("The Notebook has %.2f, %d, %d stats\n",notebook.cpu_speed_GHz,notebook.ram_size_GB,notebook.bits);

    struct Computer Computer;

    Computer.cpu_speed_GHz = 2.2;
    Computer.ram_size_GB = 8;
    Computer.bits = 4;

    printf("The Computer has %.2f, %d, %d stats\n",Computer.cpu_speed_GHz,Computer.ram_size_GB,Computer.bits);

    return 0;
}
