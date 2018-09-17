#include<stdio.h>

main()
{
  // Create a program that prints a few operations on two numbers: 22 and 13

  // Print the result of 13 added to 22

  // Print the result of 13 substracted from 22

  // Print the result of 22 multiplied by 13

  // Print the result of 22 divided by 13 (as a decimal fraction)

  // Print the reminder of 22 divided by 13

  char firstNumber = 22;
  char secondNumber = 13;
  float reminder = firstNumber % secondNumber;

  printf("%d\n", firstNumber + secondNumber);
  printf("%d\n", firstNumber - secondNumber);
  printf("%d\n", firstNumber * secondNumber);
  printf("%d\n", firstNumber / secondNumber);
  printf("%.2f\n",reminder);

}
