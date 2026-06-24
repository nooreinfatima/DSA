class Solution_2{
  public void printNumbers(int current, int n){
    if (current > n)
    return;

    System.out.println(current + " ");

    printNumbers(current+1,n);
  }
}

class Main{
  public static void main(String[] args){
    Solution_2 sol = new Solution_2();
    int n = 10;

    sol.printNumbers(1,n);
    System.out.println();
  }
}