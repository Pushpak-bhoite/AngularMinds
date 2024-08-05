#include<stdio.h>
int main(){
    for (int i = 1; i <= 10 ; i++)
    {
       for (int j = 1; j <= 10 ; j++){
        if ( j <= 6-i || j>=4+i ){
            printf("*");
        }else{
            printf(" ");
        }
        
       }
       
    }
    
}

