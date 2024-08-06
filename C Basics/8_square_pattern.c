#include <stdio.h>
int main()
{
    int n;
    int t = n;
    scanf("%d", &n);
    for (int i = 1; i <=  n * 2 - 1; i++)
    {
        int t = n;
        for (int j = 1; j <= n * 2 - 1; j++)
        {
            printf("%d ", t);
            if (j < i)
            {
                t--;
            }
            if (j > ((n * 2) - 1) - i)
            {
                t++;
            }
        }
        printf("\n");
    }
}