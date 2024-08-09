import java.util.*;

class Dummy {
    public static void main(String[] args) {
        System.out.println("hiiii .\n");
        System.out.println("hiiii .\n");

        int i = 1, No = 500;
        int n = 153;
        int len = (int) Math.log10(n) + 1;

        int add = 0, mul = 1;
        while (n != len) {
            int rem = n % 10;
            // add= add + (int) Math.pow(rem, len) ;
            add= add + 3 ;

            n= n/10 ;
        }

        System.out.println("add "+ add);
        System.out.println("Byyyyyy .\n");

    }
};