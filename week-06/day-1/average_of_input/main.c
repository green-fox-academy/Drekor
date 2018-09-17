main()
{
// Write a program that asks for 5 integers in a row,
// then it should print the sum and the average of these numbers like:
//
// Sum: 22, Average: 4.4

    printf("Give me 5 numbers plz\n");

    int temp = 0;
    int sum;
    int average;

    int * calculater = (int *)malloc(5 * sizeof(int));

    for(int i = 0; i < 5 ; i++)
    {
        scanf("%d",&calculater[i]);
        temp += calculater[i];
    }
    sum = temp;
    average = sum / 5;

    printf("Sum: %d, Average: %d",sum,average);
}
