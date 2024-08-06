#include <stdio.h>
int main()
{
    int n1,n2 ;
    scanf("%d %d", &n1 ,&n2);
    // printf("%d %d",n1,n2);
    for (int i = 1; i <= n2; i++)
    {

        for (int j = 1; j <= n1; j++)
        {
            if (i == 1 || i == n1 || i == n2 || j == 1 || j == n1)
            {
                if ((i == 1 && (j == 1 || j == n1)) ||
                    (i == n1 && (j == 1 || j == n1)) ||
                    (i == n2 && (j == 1 || j == n1)))
                {
                    printf(" ");
                }
                else
                {
                    printf("*");
                }
            }
            else
            {
                printf(" ");
            }
        }
        printf("\n");
    }
}