// - Create a function called `doubling` that doubles it's input parameter and returns with an integer
// - parameter should be a pointer to the variable you want to double

int main()
{
    int number = 10;
    int * pNumber = &number;

    int result = doubling(pNumber);
    printf("%d\n",result);

    return 0;
}
