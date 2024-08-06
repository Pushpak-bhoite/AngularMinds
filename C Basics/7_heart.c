#include <stdio.h>
int main()
{
    int n;
    scanf("%d", &n);
    int n1 = n / 3;

    for (int i = n1; i > 0; i--)
    {
        for (int j = 1; j < n * 2 - 1; j++)
        {
            if (j >= i && j <= n - i)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }

    for (int i = 0; i <= n ; i++)
    {
        for (int j = 0; j < n * 2 - 1 ; j++)
        {
            if (j >= i && j <= (n * 2) - i)
            {
                printf("*");
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
}