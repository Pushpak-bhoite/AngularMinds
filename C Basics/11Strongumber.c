#include <stdio.h>
int main()
{
    int NO = 145, i = 1;
    printf("Enter The Number for N number strong Number :\n");
    scanf("%d",&NO);
    while (i <= NO)
    {
        int n = i;
        // printf("%d\n", n);
        int sum = 0;

        while (n)
        {
            int rem = n % 10;
            int mul = 1;
            while (rem)
            {
                mul = mul * rem;
                rem--;
            }
            sum = sum + mul;
            n = n / 10;
        }

        if (i == sum)
        {
            printf("%d__\n", sum);
        }

        i++;
    }
}
