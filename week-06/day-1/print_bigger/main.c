#include <stdio.h>
#include <stdlib.h>

int main()
{

    // Write a program that asks for two numbers and prints the bigger one

    int firstNumber;
    int secondNumber;

    printf("Give me 2 number plez\n");
    scanf("%d %d",&firstNumber,&secondNumber);

    if(firstNumber > secondNumber)
    {
        printf("%d\n is bigger",firstNumber);
    }
    else
    {
        printf("%d is bigger",secondNumber);
    }
    return 0;
}
