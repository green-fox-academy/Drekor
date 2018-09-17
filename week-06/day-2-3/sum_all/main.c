// - Create an array variable named `ai`
//   with the following content: `[3, 4, 5, 6, 7]`
// - Create a function that takes an array as a paramater and returns the sum of the
//   elemnets in that array

int main()
{
    int ai[] = {3,4,5,6,7};

    int elements = sizeof(ai)/sizeof(ai[0]);

    sumOfTheElements(ai,elements);

    return 0;
}
