#include <stdio.h>
#include <stdlib.h>

int main()
{

    // Create a program that asks for two numbers
// If the second number is not bigger than the first one it should print:
// "The second number should be bigger"
//
// If it is bigger it should count from the first number to the second by one
//
// example:
//
// first number: 3, second number: 6, should print:
//
// 3
// 4
// 5

    int firstNumber;
    int secondNumber;

    printf("give me 2 number plez\n");
    scanf("%d %d",&firstNumber,&secondNumber);
    printf("\n");

    if(firstNumber > secondNumber)
    {
        printf("The second number should be bigger");
    }
    else
    {
        for(int i = firstNumber; i < secondNumber; i++)
        {
            printf("%d\n",i);
        }
    }
    return 0;
}
