public class MinRecursion {

    // Recursive function to find the minimum element
    public static int minimum(int ix, int arr[]) {
        // Base case: if we're at the last element
        if (ix == arr.length - 1) {
            return arr[ix];
        }

        // Recursive case: find the minimum in the rest of the array
        int minInRest = minimum(ix + 1, arr);

        // Compare the current element with the minimum found in the rest of the array
        // return Math.min(arr[ix], minInRest);
        if(arr[ix] < minInRest){
            return arr[ix] ;
        }else{
            return minInRest ;
        }
    }

    public static void main(String[] args) {
        int arr[] = {1, 2, 3, 4, 5, 6, 7};
        int min = minimum(0, arr);
        System.out.println("Minimum: " + min);
    }
}
