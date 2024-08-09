import java.util.*;

public class Main {
    public static void main(String[] args) {
        System.out.println("Enter The No :");
        // Scanner sc= new Scanner(System.in) ;
        int n = 9;
        // int k = 1;

        System.out.println(n);
        for (int i = 1; i <= n; i++) {
             int k = i;
            for (int j = 1; j <= n*2 -1; j++) {
                if(j> (n)- i && j < n + i){
                    if(j == (n-i)+1 && i != 1){
                        System.out.print("");
                    }else{
                        System.out.print(k);
                    }
                    if(j>=n){
                        k--;
                    }else{
                    k++;
                    }
                }else{
                    System.out.print("");
                }
            }
             System.out.print("\n");
        }

        // sc.close();
    }
}
