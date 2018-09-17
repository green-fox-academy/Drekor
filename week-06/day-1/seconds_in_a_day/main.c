main()
{
    int currentHours = 14;
    int currentMinutes = 34;
    int currentSeconds = 42;

    // Write a program that prints the remaining seconds (as an integer) from a
    // day if the current time is represented by the variables

    int allSecondsInADay = 86400;
    int second = 60;
    int currentMinutesInSeconds = second * currentMinutes + currentSeconds + currentHours * second * second;

    int currentTimeInSeconds = allSecondsInADay - currentMinutesInSeconds;

    printf("%d\n",currentTimeInSeconds);

}
