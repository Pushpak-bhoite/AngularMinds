public class Recursion {
    public static void main(String[] args) {

      int arr[] = {5,6};
      System.out.println("length =>"+arr.length);
      int len = arr.length ;
      recPrint(len-1 ,arr );
    }
    public static void recPrint(int k, int arr[]) {
      
      if(k > 0){
        System.out.println("Im just called "+k);
        recPrint(k-1, arr);
      }
      System.out.println("index "+k+ " val " + arr[k]);
      // System.out.println("arr[k]");

    }
  }
  