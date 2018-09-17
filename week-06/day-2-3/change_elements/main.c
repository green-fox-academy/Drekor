#include <stdio.h>
#include <stdlib.h>

// - Create an array variable named `s`
//   with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the 8 to 4
// - Print the fourth element

int main()
{

    int s[] = {1, 2, 3, 8, 5, 6};

    for(int i = 0; i < sizeof(s)/sizeof(s[0]); i++)
    {
        if(s[i] == 8)
        {
            s[i] = 4;
            printf("%d\n",s[i]);
        }
    }

    return 0;
}
