#include <stdio.h>
main()
{
    int a = 3;
    a += 10;
    // make it bigger by 10
    printf("%d\n",a);


    int b = 100;
    b -= 7;
    // make it smaller by 7
    printf("%d\n",b);


    int c = 44;
    c += c;
    // please double c's value
    printf("%d\n",c);


    int d = 125;
    d = d / 5;
    // please divide by 5 d's value
    printf("%d\n",d);


    double e = 8;
    double power = 2;
    e = pow(e,power);
    // please cube of e's value
    printf("%.2f\n",e);


    int f1 = 123;
    int f2 = 345;
    // tell if f1 is bigger than f2 (print as a boolean)
    if(f1 > f2)
    {
        printf("True\n");
    }
    else
    {
        printf("False\n");
    }


    int g1 = 350;
    int g2 = 200;
    // tell if the double of g2 is bigger than g1 (print as a boolean)
    if((g2 * 2) > g1)
    {
        printf("True\n");
    }
    else
    {
        printf("False\n");
    }


    int h = 1357988018575474;
    // tell if it has 11 as a divisor (print as a boolean)
    if(h % 11 == 0)
    {
        printf("True, 1357988018575474 it can be divide by 11\n");
    }
    else
    {
        printf("False, cannot divideable by 11\n");

    }


    int i1 = 10;
    int i2 = 3;
    // tell if i1 is higher than i2 squared and smaller than i2 cubed (print as a boolean)
    if(i1 > i2 * i2 && i1 < i2*i2*i2 )
    {
        printf("True\n");
    }
    else
    {
        printf("False\n");
    }

    int j = 1521;
    // tell if j is dividable by 3 or 5 (print as a boolean)
    if(j %3 == 0 || j % 5 ==0)
    {
        printf("True\n");
    }
    else
    {
        printf("False\n");
    }

    char k[24] = "Apple";

    char * temp;
    temp = (char *)malloc(strlen(k));

    for(int i = 0; i < 4; i++)
    {
        strcat(temp,k);
    }
    strcpy(k,temp);
    free(temp);
    printf("%s\n\n",k);
}
