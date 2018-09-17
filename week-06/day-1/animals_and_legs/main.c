int main()
{
    // Write a program that asks for two integers
    // The first represents the number of chickens the farmer has
    // The second represents the number of pigs owned by the farmer
    // It should print how many legs all the animals have

    int numberOfChickens;
    int numberOfPigs;

    printf("Give me some Chicken, and Pigs too!\n");
    scanf("%d %d",&numberOfChickens, &numberOfPigs);

    int chickensLegs = numberOfChickens * 2;
    int pigLegs = numberOfPigs * 4;

    printf("Now I have %d Chicken, and %d Pig legs!!!", chickensLegs,pigLegs);

    return 0;
}
