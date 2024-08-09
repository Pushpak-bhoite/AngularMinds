public class Temp {
    
    public static int sum(int l, int arr[]){
        System.out.println("l = "+ l);
        if(l == 0 ){
            return 0;
        }    

        System.out.println("l "+ (l-1) +" arr " + arr[l -1 ]);
        return sum(l-1, arr) + arr[l] ;
    }

    public static void main(String args[]){
        int arr[] = {1,2,3,4,5};
        int len = arr.length;
        int add = sum(len-1 , arr );
        System.out.println("add ->"+ add);
      
    }

}
