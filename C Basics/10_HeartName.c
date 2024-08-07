#include <stdio.h>
#include <string.h>

int main()
{
    int n;
    char name[50];
    printf("Enter Your crush's Name :\n");
    gets(name);
    int len = strlen(name);
    // printf("%s",name);
    // printf("%d %c",len , name[1]);
    printf("Enter Number :\n");
    scanf("%d", &n);
    int n1 = n / 3;

    int start = n - len / 2;
    int end = n + len / 2;
    int cnt = 0;
    // printf("%d%d", start, end);

    for (int i = n1; i > 0; i--)
    {
        for (int j = 1; j <= n * 2 - 1; j++)
        {
            if ((j >= i && j <= n - i) || (j >= n + i && j <= (n * 2) - i))
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

    for (int i = 1; i <= n; i++)
    {
        for (int j = 1; j <= n * 2 - 1; j++)
        {
            if (j >= i && j <= (n * 2) - i)
            {
                if (i == 1 && j >= start && j <= end)
                {
                    printf("%c", name[cnt++]);
                    // cnt++;
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
