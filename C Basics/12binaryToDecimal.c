#include <stdio.h>
#include <math.h>
#include <stdlib.h>

int main()
{
    int n;
    int cnt = -1;
    int add = 0;
    
    // scanf("%d", &n);
    n = 1110;
    
    int temp = n ;
    while (n)
    {
        n = n / 10;
        cnt++;
    }
    printf("cnt %d\n", cnt);
    n= temp ;
    while (n)
    {
        int rem = n % 10;
        printf("%d\n",cnt);
        int power = rem * pow(2, cnt);
        printf("%d", power);
        cnt--;
        add = add + power;
        n = n / 10;
    }

printf("\nfinal= %d", add);
    
}