import java.util.*;

class Test {
    public static void main(String []args)
    {
        System.out.println("Enter Tne Number .\n");
        int n ;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        System.out.println(n);

        while (n !=0 ) {
            int rem = n% 10  ; 
            n = n/10;
            System.out.println("\n"+n);
        }
    }
};