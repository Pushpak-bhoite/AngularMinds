#include <stdio.h>
int main()
{
    int k = 0;
    for (int i = 1; i <= 9; i++)
    {
        for (int j = 1; j <= 9; j++)
        {
            if (j > 5 - i && j < 10 - (k * 2) || (i > 5 && j > i - 5 && j < (k * 2) - 6))
            {
                printf("%d", j);
            }
            else
            {
                printf(" ");
            }
        }
        k++;
        printf("\n");
    }
}