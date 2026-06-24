class Solution_1{
  public void printName(String name, int count, int N){
    if (count == N)
    return;

    System.out.println(name);

    printName(name, count+1, N);

  }
}

class Main{
  public static void main(String[] args){
    Solution_1 sol = new Solution_1();
    int N=5;
    String name = "Noorein";

    sol.printName(name,0,N);
  }
}