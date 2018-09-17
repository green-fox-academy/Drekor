main()
{
    // Write a program that asks for an integer that is a distance in kilometers,
    // then it converts that value to miles and prints it

    int distanceInKilometers;

    printf("Hello! give me some kilometers plez\n");
    scanf("%d", &distanceInKilometers);

    float mileConverter = distanceInKilometers * 0.621371;

    printf("%d KM is %.5f Miles\n",distanceInKilometers,mileConverter);
}
