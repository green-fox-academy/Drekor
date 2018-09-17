int main()
{
// Write a program that reads a number from the standard input,
// Then prints "Odd" if the number is odd, or "Even" if it is even.

    int standardInput;

    printf("Give me a number plez\n");
    scanf("%d",&standardInput);

    if(standardInput %2 == 0)
    {
        printf("This number is Even!\n",standardInput);
    }
    else
    {
        printf("This number is Odd!\n",standardInput);
    }

    return 0;
}
