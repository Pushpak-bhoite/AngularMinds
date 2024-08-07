#include <stdio.h>
int main()
{
    printf("Enter Number :\n");
    int n;
    scanf("%d", &n);
    int n1 = n / 3;

    for (int i = n1; i > 0; i--)
    {
        for (int j = 1; j <= n * 2 - 1; j++)
        {
            if ((j >= i && j <= n - i) || (j >= n + i && j <= (n * 2) - i))
            {
                printf("* ");
            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n * 2 - 1; j++)
        {
            if (j >= i && j <= (n * 2 ) - i)
            {
                // printf("%d",j);
                printf("* ");

            }
            else
            {
                printf("  ");
            }
        }
        printf("\n");
    }
}


