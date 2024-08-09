public class maxRecurssion{
    
    public static int maximum(int arr[],int idx){

        System.out.println("idx" + idx );
        if(idx == arr.length - 1 ){
            return arr[idx] ;
        }
        int max = maximum(arr,idx + 1);   
        if(arr[idx] < max){
            return max ;
        }else{
            return arr[idx]; 
        }
    }

    public static void main(String[] args){
        int arr[] = {1,2,3,4,5,6};
        int result = maximum(arr,0);
        System.out.println(" final " + result );
    }
}